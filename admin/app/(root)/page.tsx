import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="flex items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      This is a protected route
    </div>
  );
};

export default SetupPage;
