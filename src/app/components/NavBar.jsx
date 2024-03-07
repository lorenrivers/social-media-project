import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default async function NavBar() {
  const { userId } = auth();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/my-profile">My Profile</Link>
      <Link href="/find-a-user">Find a User</Link>
      {userId ? <UserButton /> : <SignInButton />}
    </nav>
  );
}
