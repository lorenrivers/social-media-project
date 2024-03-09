import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="welcome-text">
      <SignedIn>
        <h1>Welcome</h1>
      </SignedIn>
      <SignedOut>
        <h2>Log in, or sign up today!</h2>
      </SignedOut>
    </div>
  );
}
