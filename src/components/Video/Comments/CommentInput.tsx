export default function CommentInput({ userAvatar }: { userAvatar: string }) {
  return (
    <div className="flex gap-4 mb-6">
      <img
        src={userAvatar}
        alt="User avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-blue-500 text-white"
        />
      </div>
    </div>
  );
}
