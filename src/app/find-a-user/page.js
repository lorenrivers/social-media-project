import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function FindAUser({ searchParams }) {
  const users = await sql`SELECT id, first_name, last_name FROM user_info`;

  return (
    <div>
      <h2 className="text-indigo12 m-2 font-bold">Find a User</h2>
      {users.rows.map((user) => (
        <div key={user.id}>
          <Link href={`/find-a-user/${user.id}`} className="text-indigo11 m-2">
            {user.first_name} {user.last_name}
          </Link>
        </div>
      ))}
    </div>
  );
}
