import SideBarVideoCard from "../SideBarVideoCard";

export default function RelatedVideos({ relatedVideos }: any) {
  console.log(relatedVideos);
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold px-4">Related Videos</h3>
      <div className="space-y-4">
        {relatedVideos?.data?.items.map((video: any, index: number) => {
          console.log(video);
          return (
            <div key={index} className="px-4">
              <SideBarVideoCard {...video} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
