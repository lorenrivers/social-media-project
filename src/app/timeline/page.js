import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function TimelinePage() {
  const user = await currentUser();

  async function handleSavePost(formData) {
    "use server";

    const post = formData.get("post");

    const insertPost =
      await sql`INSERT INTO posts (user_id, post_content) VALUES (${user.id}, ${post})`;

    revalidatePath("/timeline");
    redirect("/timeline");
  }

  const usersAndPosts =
    await sql`SELECT user_info.user_id, user_info.first_name, user_info.last_name, posts.user_id, post_content FROM user_info JOIN posts ON user_info.user_id = posts.user_id`;

  return (
    <div>
      <h2>Timeline</h2>
      <form action={handleSavePost}>
        <label htmlFor="post">What&apos;s on your mind?</label>
        <textarea
          id="post"
          name="post"
          placeholder="Share your thoughts..."
        ></textarea>
        <button type="submit">Save Post</button>
      </form>
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
