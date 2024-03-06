import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CreateProfile() {
  const user = await currentUser();

  async function handleSaveProfile() {
    "use server";

    const location = formData.get("location");
    const bio = formData.get("bio");

    //add sql query to insert data in to database
    const postResult =
      await sql`INSERT INTO user_info (user_id, first_name, last_name, location, bio) VALUES (${user.id}, ${user.firstName}${user.lastName}${location}${bio})`;

    revalidatePath("/my-profile");
    redirect("/my-profile");
  }

  return (
    <div>
      <h2>Hi {user.firstName}, let&apos;s finish creating your profile!</h2>
      <form action={handleSaveProfile}>
        <label htmlFor="location">Where do you live?</label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Location"
        />
        <label htmlFor="bio">Write a short bio about yourself!</label>
        <textarea
          id="bio"
          name="bio"
          placeholder="What do you want other people to know about you? Hobbies? Interests? Favourite movies or music? Write it here! "
        ></textarea>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
