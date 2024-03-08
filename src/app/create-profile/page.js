import { currentUser } from "@clerk/nextjs";
import CreateProfileForm from "@/app/components/CreateProfileForm";

export default async function CreateProfile() {
  const user = await currentUser();

  return (
    <div>
      <h2>Hi {user.firstName}, let&apos;s finish creating your profile!</h2>
      <CreateProfileForm />
    </div>
  );
}
