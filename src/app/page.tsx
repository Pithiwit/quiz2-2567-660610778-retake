import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example */}
        <PostOwnner 
          userImagePath="/profileImages/profile778.jpg" 
          username="Pithiwit Netkhamyuang 660610778" 
          likes={100}
        />
        {/* map-loop render Comment component here */}
        {/* Comment Example */}
        {comments.map((user) => (
          <Comment key={user.username} {...user} />
        ))}
      </div>
    </div>
  );
}
