import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function CommentsSection({ comments, commentCount }: any) {
  return (
    <div className="glass-effect rounded-lg !p-4 mt-4">
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-lg font-semibold">Comments</h3>
        <span className="text-gray-400">{commentCount}</span>
      </div>
      <CommentInput userAvatar="https://i.ibb.co.com/zQmhFqq/image.png" />
      <CommentList comments={comments} />
    </div>
  );
}
