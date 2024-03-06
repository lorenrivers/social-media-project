import { currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

export default async function MyProfile() {
  const user = await currentUser();

  const usersProfileInfo =
    await sql`SELECT location, bio FROM user_info WHERE user_id = ${user.id}`;

  return (
    <div>
      <h2>{user.firstName}&apos;s Profile</h2>
      <h3>
        {user.firstName}
        {user.lastName}
      </h3>
      {usersProfileInfo.rows.map((userInfo) => (
        <div key={userInfo.id}>
          <p>Lives in {userInfo.location}</p>
          <h4>Bio:</h4>
          <p>{userInfo.bio}</p>
        </div>
      ))}
    </div>
  );
}
