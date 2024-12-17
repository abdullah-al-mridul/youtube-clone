import { Play } from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";

// function formatNumber(num: number): string {
//   if (num >= 1e9) {
//     return (num / 1e9).toFixed(1) + "B"; // Billions
//   } else if (num >= 1e6) {
//     return (num / 1e6).toFixed(1) + "M"; // Millions
//   } else if (num >= 1e3) {
//     return (num / 1e3).toFixed(1) + "K"; // Thousands
//   }
//   return num.toString();
// }

export default function SideBarVideoCard(props: any) {
  const { id, snippet } = props;
  return snippet ? (
    <Link
      to={`/watch/${id.videoId}`}
      className="group cursor-pointer glass-effect block"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={
            snippet?.thumbnails.medium
              ? snippet?.thumbnails.medium.url
              : "https://i.ibb.co.com/KbqFvhW/image.png"
          }
          alt={snippet?.thumbnails.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-white font-medium line-clamp-2 text-sm sm:text-base">
          {snippet?.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">{snippet?.channelTitle}</p>
        <div className="flex items-center text-gray-400 text-xs mt-1">
          {/* <span>{formatNumber(parseInt(statistics?.viewCount))} views</span> */}
          {/* <span className="mx-1">•</span> */}
          <span>{moment(snippet?.publishedAt).fromNow()}</span>
        </div>
      </div>
    </Link>
  ) : null;
}
