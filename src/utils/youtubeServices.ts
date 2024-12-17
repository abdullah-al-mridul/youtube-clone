import axios from "axios";

const API_KEY = "AIzaSyDAh4BqXPR8nvP7sjQ0lqlcTUc2g0KLAXk";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchPopularVideos = async (categoryId?: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: 200,
        key: API_KEY,
        videoCategoryId: categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular videos:", error);
    throw error;
  }
};
export const fetchVideoDetails = async (id?: string) => {
  try {
    const videoRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos`,
      {
        params: {
          part: "snippet,statistics,contentDetails",
          id,
          key: API_KEY,
        },
      }
    );
    console.log(videoRes);
    const relatedRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          q: videoRes.data.items[0].snippet.localized.title,
          channelId: videoRes.data.items[0].snippet.channelId,
          type: "video",
          maxResults: 10,
          key: API_KEY,
        },
      }
    );
    console.log(relatedRes);

    const commentsRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads`,
      {
        params: {
          part: "snippet",
          videoId: id,
          maxResults: 10,
          key: API_KEY,
        },
      }
    );
    console.log(commentsRes);
    const channelIdGot = videoRes.data.items[0]?.snippet?.channelId;
    let channelLogo;
    let channelSubs;
    if (channelIdGot) {
      // Step 2: Fetch channel details using the channelId
      const channelRes = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels`,
        {
          params: {
            part: "snippet,statistics,contentDetails",
            id: channelIdGot,
            key: API_KEY,
          },
        }
      );
      console.log(channelRes);
      channelLogo = channelRes.data.items[0]?.snippet?.thumbnails?.high?.url;
      channelSubs = channelRes.data.items[0]?.statistics?.subscriberCount;
    }
    // Step 3: Extract the channel logo from the response
    return {
      videoRes,
      relatedRes,
      commentsRes,
      channelData: {
        channelLogo,
        channelSubs,
      },
    };
  } catch (error) {
    console.error("Error fetching video details:", error);
  }
};
