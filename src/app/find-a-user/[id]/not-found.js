import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested post</p>
      <Link href="/">Home</Link>
    </div>
  );
}
