import { currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

export default async function MyProfile() {
  const user = await currentUser();

  const usersProfileInfo =
    await sql`SELECT location, bio FROM user_info WHERE user_id = ${user.id}`;

  const usersPosts =
    await sql`SELECT user_id, post_content FROM posts WHERE user_id = ${user.id}`;

  return (
    <div>
      <h2 className="text-indigo12 m-2 font-bold">
        {user.firstName}&apos;s Profile
      </h2>
      {usersProfileInfo.rows.map((userInfo) => (
        <div key={userInfo.id} className="m-2">
          <p>Lives in {userInfo.location}</p>
          <h4>Bio:</h4>
          <p>{userInfo.bio}</p>
        </div>
      ))}
      <h4 className="text-indigo12 m-2 font-semibold">
        {user.firstName}&apos;s Posts
      </h4>
      {usersPosts.rows.map((userPost) => (
        <div key={userPost.id} className="m-2">
          <p>{userPost.post_content}</p>
        </div>
      ))}
    </div>
  );
}
