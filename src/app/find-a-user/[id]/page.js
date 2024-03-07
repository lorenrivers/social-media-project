import { sql } from "@vercel/postgres";

export default async function UserIdProfilePage({ params }) {
  //display the specifc profile information
  const profile = (await sql`SELECT * FROM user_info WHERE id = ${params.id}`)
    .rows[0];

  //display and map through ALL posts related with that user
  const userPosts =
    await sql`SELECT user_info.id, user_info.user_id, posts.user_id, post_content
  FROM user_info
  LEFT JOIN posts
  ON user_info.user_id = posts.user_id
  WHERE id = ${params.id}`;

  return (
    <div>
      <h2>{profile.first_name}&apos;s Profile</h2>
      <p>Lives in {profile.location}</p>
      <h4>Bio:</h4>
      <p>{profile.bio}</p>
      <h2>{profile.first_name}&apos;s Posts</h2>
      {userPosts.rows.map((userPost) => (
        <div key={userPost.id}>
          <p>{userPost.post_content}</p>
        </div>
      ))}
    </div>
  );
}
