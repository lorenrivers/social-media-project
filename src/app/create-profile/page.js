import { currentUser } from "@clerk/nextjs";
import CreateProfileForm from "@/app/components/CreateProfileForm";

export default async function CreateProfile() {
  const user = await currentUser();

  return (
    <div>
      <h2 className="text-indigo12 m-2 font-bold">
        Hi {user.firstName}, let&apos;s finish creating your profile!
      </h2>
      <CreateProfileForm />
    </div>
  );
}
