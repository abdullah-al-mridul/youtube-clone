export interface Video {
  id?: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export interface VideoDetails extends Video {
  likes: string;
  description: string;
  channelInfo: {
    name: string;
    subscribers: string;
    avatar: string;
    description: string;
  };
}
// export interface Video {
//   id: string;
//   snippet?: {
//     title: string;
//     description: string;
//     thumbnails: {
//       medium: {
//         url: string;
//       };
//     };
//   };
//   statistics?: {
//     viewCount: string;
//     likeCount: string;
//   };
// }

// export interface YouTubeApiResponse {
//   items: Video[];
// }
