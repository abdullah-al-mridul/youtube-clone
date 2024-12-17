import VideoGrid from "../components/VideoGrid";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <div className="flex overflow-x-auto flex-wrap gap-y-3 whitespace-nowrap py-4 px-4 mx-4 mt-4 mb-2 glass-effect">
        {[
          "All",
          "Gaming",
          "Music",
          "Live",
          "Computer Programming",
          "Podcasts",
          "News",
          "Cooking",
          "Recently uploaded",
        ].map((category) => (
          <button
            key={category}
            className="px-4 py-1.5 text-white rounded-full mr-3 bg-blur-css transition-all whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>
      <VideoGrid />
    </div>
  );
}
