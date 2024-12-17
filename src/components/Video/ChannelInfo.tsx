import { Bell } from "lucide-react";

interface ChannelInfoProps {
  name: string;
  subscribers: string;
  avatar: string;
  description: string;
}

export default function ChannelInfo({
  name,
  subscribers,
  avatar,
  description,
}: ChannelInfoProps) {
  return (
    <div className="glass-effect rounded-lg !p-4 mt-4">
      <div className="flex items-start gap-4">
        <img
          src={avatar || "https://i.ibb.co.com/zQmhFqq/image.png"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex flex-col mb:flex-row items-start mb:items-center gap-2 justify-between">
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-400 text-sm">{subscribers} subscribers</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-blur-css text-white bg-blur-css-2 px-4 py-2 rounded-full font-semibold ">
                Subscribe
              </button>
              <button className="p-2 hover:bg-gray-800/50  transition-all rounded-full">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="mt-4 text-gray-300 line-clamp-2 overflow-hidden text-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
