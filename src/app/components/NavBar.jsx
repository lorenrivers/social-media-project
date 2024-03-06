import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";

export default async function NavBar() {
  const { userId } = auth();
  const user = await currentUser();
  //   console.log(user);

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/my-profile">My Profile</Link>
      {userId ? <UserButton /> : <SignInButton />}
    </nav>
  );
}
