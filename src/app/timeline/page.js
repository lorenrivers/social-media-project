import { sql } from "@vercel/postgres";
import CreatePostForm from "@/app/components/CreatePostForm";
import LikeButton from "../components/LikeButton";

export default async function TimelinePage() {
  //display users, their posts and likes total
  const usersAndPosts =
    await sql`SELECT user_info.id, user_info.user_id, user_info.first_name, user_info.last_name, posts.post_id, posts.user_id, post_content, likes_junction.post_liked, likes_junction.like_count 
    FROM posts
    JOIN user_info ON user_info.user_id = posts.user_id
    LEFT JOIN likes_junction ON posts.post_id = likes_junction.post_liked`;

  return (
    <div className="m-5">
      <h2 className="text-indigo12 m-2 font-bold">Timeline</h2>
      <CreatePostForm className="m-2" />

      <h3 className="text-indigo12 mx-2 mt-7 font-bold">Global Timeline</h3>
      {usersAndPosts.rows.map((userAndPost) => (
        <div key={userAndPost.id}>
          <h4 className="text-indigo11 m-2">
            {userAndPost.first_name} {userAndPost.last_name}
          </h4>
          <p className="m-2">{userAndPost.post_content}</p>
          <div className="flex gap-x-2 m-2">
            <LikeButton post={userAndPost.post_id} />
            <p>{userAndPost.like_count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
