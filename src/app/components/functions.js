"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

export async function handleSaveProfile(formData) {
  const user = await currentUser();
  const location = formData.get("location");
  const bio = formData.get("bio");

  const postResult =
    await sql`INSERT INTO user_info (user_id, first_name, last_name, location, bio) VALUES (${user.id}, ${user.firstName}, ${user.lastName}, ${location}, ${bio})`;

  revalidatePath("/find-a-user");
  redirect("/my-profile");
}

export async function handleSavePost(formData) {
  const user = await currentUser();
  const post = formData.get("post");

  const insertPost =
    await sql`INSERT INTO posts (user_id, post_content) VALUES (${user.id}, ${post})`;

  revalidatePath("/timeline", "/my-profile");
  redirect("/timeline");
}
