import { sql } from "@vercel/postgres";
import CreatePostForm from "@/app/components/CreatePostForm";

export default async function TimelinePage() {
  const usersAndPosts =
    await sql`SELECT user_info.user_id, user_info.first_name, user_info.last_name, posts.user_id, post_content FROM user_info JOIN posts ON user_info.user_id = posts.user_id`;

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
        </div>
      ))}
    </div>
  );
}
