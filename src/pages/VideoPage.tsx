import VideoPlayer from "../components/Video/VideoPlayer";
import VideoInfo from "../components/Video/VideoInfo";
import ChannelInfo from "../components/Video/ChannelInfo";
import CommentsSection from "../components/Video/Comments/CommentsSection";
import RelatedVideos from "../components/Video/RelatedVideos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideoDetails } from "../utils/youtubeServices";
import { AxiosResponse } from "axios";
import { formatNumber } from "../utils/formatters";
import moment from "moment";
interface VideoRes extends AxiosResponse {
  status: number;
  statusText: string;
  data: {
    items: any[]; // You can refine this type based on the actual data structure
  };
}

interface ChannelData {
  channelLogo: string;
  channelSubs: number;
}

interface VideoDetailsResponse {
  videoRes: VideoRes;
  relatedRes: object;
  commentsRes: object;
  channelData: ChannelData;
}

export default function VideoPage() {
  const [videoRes, setVideoRes] = useState<VideoRes>();
  const [channelDetails, setChannelDetails] = useState<ChannelData>();
  const [commentsRes, setCommentsRes] = useState<any>();
  const [reletedRes, setReletedRes] = useState<any>();
  const { videoId } = useParams<{ videoId: string }>();
  const fetchData = async () => {
    try {
      const data: VideoDetailsResponse | undefined = await fetchVideoDetails(
        videoId
      );

      if (data) {
        data;
        if (
          data.videoRes &&
          data.channelData &&
          data.commentsRes &&
          data.relatedRes &&
          typeof data.channelData === "object"
        ) {
          setVideoRes(data.videoRes);
          setChannelDetails(data.channelData);
          setCommentsRes(data.commentsRes);
          setReletedRes(data.relatedRes);
        } else {
          console.error("Invalid videoRes or channelData structure");
        }
      } else {
        console.error("fetchVideoDetails returned undefined");
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="flex-1">
        <VideoPlayer />
        <VideoInfo
          title={videoRes?.data.items[0].snippet.localized.title}
          views={
            videoRes?.data.items[0].statistics.viewCount
              ? formatNumber(videoRes?.data.items[0].statistics.viewCount)
              : "0"
          }
          timestamp={moment(
            videoRes?.data.items[0].snippet.publishedAt
          ).fromNow()}
          likes={
            videoRes?.data.items[0].statistics.viewCount
              ? formatNumber(videoRes?.data.items[0].statistics.likeCount)
              : "0"
          }
        />
        <ChannelInfo
          name={videoRes?.data.items[0].snippet.channelTitle}
          subscribers={
            channelDetails ? formatNumber(channelDetails.channelSubs) : "0"
          }
          avatar={
            channelDetails?.channelLogo ||
            "https://i.ibb.co.com/zsGJhbF/image.png"
          }
          description={videoRes?.data.items[0].snippet.description}
        />
        <CommentsSection
          comments={commentsRes?.data.items}
          commentCount={
            videoRes?.data.items[0].statistics.viewCount
              ? formatNumber(videoRes?.data.items[0].statistics.commentCount)
              : "0"
          }
        />
      </div>
      <div className="lg:w-[350px] hidden lg:block">
        <RelatedVideos relatedVideos={reletedRes} />
      </div>
    </div>
  );
}
