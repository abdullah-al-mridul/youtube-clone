import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { fetchPopularVideos } from "../utils/youtubeServices";

// Define the types for video data
interface Video {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    title: string;
    localized: { title: string };
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      maxres: { url: string };
      title: string;
    };
  };
  statistics: {
    viewCount: string;
  };
}

export default function VideoGrid() {
  // Type the state to be an array of `Video` objects
  const [videos, setVideos] = useState<Video[]>([]);
  const youtubeCategoryIds = [1, 2, 10, 15, 20, 23, 24, 25, 26, 28];
  const randomIdx = Math.floor(Math.random() * youtubeCategoryIds.length);
  const randomCatagoryID = youtubeCategoryIds[randomIdx];
  console.log(youtubeCategoryIds[randomCatagoryID]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedVideos = await fetchPopularVideos(
        randomCatagoryID.toString()
      );
      setVideos(fetchedVideos.items); // Assuming `items` matches the `Video[]` type
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 ">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
