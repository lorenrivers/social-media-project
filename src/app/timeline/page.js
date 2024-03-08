import { sql } from "@vercel/postgres";
import CreatePostForm from "@/app/components/CreatePostForm";

export default async function TimelinePage() {
  const usersAndPosts =
    await sql`SELECT user_info.user_id, user_info.first_name, user_info.last_name, posts.user_id, post_content FROM user_info JOIN posts ON user_info.user_id = posts.user_id`;

  return (
    <div>
      <h2>Timeline</h2>
      <CreatePostForm />

      <h3>Global Timeline</h3>
      {usersAndPosts.rows.map((userAndPost) => (
        <div key={userAndPost.id}>
          <h4>
            {userAndPost.first_name} {userAndPost.last_name}
          </h4>
          <p>{userAndPost.post_content}</p>
        </div>
      ))}
    </div>
  );
}
