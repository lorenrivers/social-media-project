import { currentUser } from "@clerk/nextjs";

export default async function MyProfile() {
  const user = await currentUser();

  return (
    <div>
      <h2>{user.firstName}&apos;s Profile</h2>
      <h3>
        {user.firstName}
        {user.lastName}
      </h3>
    </div>
  );
}
