import { useParams } from "react-router-dom";
export default function VideoPlayer() {
  const { videoId } = useParams();
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      {/* <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <Play className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300">
              <Play className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-white" />
              <div className="w-24 h-1 bg-white/30 rounded-full">
                <div className="w-3/4 h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-300">
              <Settings className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-300">
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div> */}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}
