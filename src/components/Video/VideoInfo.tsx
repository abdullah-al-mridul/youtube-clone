import { ThumbsUp, ThumbsDown, Share, Save, MoreVertical } from "lucide-react";

interface VideoInfoProps {
  title: string;
  views: string;
  timestamp: string;
  likes: string;
}

export default function VideoInfo({
  title,
  views,
  timestamp,
  likes,
}: VideoInfoProps) {
  return (
    <div className="glass-effect rounded-lg !p-4 mt-4 max-w-full">
      <h1 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-gray-400 text-sm">
          <span>{views} views</span>
          <span className="mx-2">•</span>
          <span>{timestamp}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:bg-gray-800/50 transition-all px-4 py-2 rounded-full">
            <ThumbsUp className="w-5 h-5" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-2 hover:bg-gray-800/50 transition-all px-4 py-2 rounded-full">
            <ThumbsDown className="w-5 h-5" />
          </button>
          <button className=" items-center gap-2 hidden mb:flex hover:bg-gray-800/50 transition-all px-4 py-2 rounded-full">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
          <button className="hidden mb:flex items-center gap-2 hover:bg-gray-800/50 transition-all px-4 py-2 rounded-full">
            <Save className="w-5 h-5" />
            <span>Save</span>
          </button>
          <button className="p-2 hover:bg-gray-800/50 transition-all rounded-full hidden mb:block">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
