import { ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react";
import moment from "moment";
import { formatNumber } from "../../../utils/formatters";
export default function CommentList({ comments }: any) {
  console.log(comments);
  return (
    <div className="space-y-6">
      {comments?.map((comment: any) => (
        <div key={comment.id} className="flex gap-4">
          <img
            src={
              comment.snippet.topLevelComment.snippet.authorProfileImageUrl ||
              "https://i.ibb.co.com/zQmhFqq/image.png"
            }
            // alt={comment.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </span>
              <span className="text-gray-400 text-sm">
                {moment(
                  comment.snippet.topLevelComment.snippet.publishedAt
                ).fromNow()}
              </span>
            </div>
            <p className="mt-1 text-gray-300">
              {comment.snippet.topLevelComment.snippet.textOriginal}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <ThumbsUp className="w-4 h-4" />
                {formatNumber(
                  comment.snippet.topLevelComment.snippet.likeCount
                )}
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <ThumbsDown className="w-4 h-4" />
              </button>
              <button className="text-sm text-gray-400 hover:text-white">
                Reply
              </button>
              <button className="ml-auto text-gray-400 hover:text-white">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
