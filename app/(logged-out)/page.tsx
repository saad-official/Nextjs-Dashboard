import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
const LandingPage = () => {
  return (
    <>
      <h1 className="flex gap-2 items-center">  <PersonStandingIcon size={50} className="text-pink-500" />  Support Me</h1>
      <p>The best Dashboard to manage customer support</p>
      <div className="flex items-center  gap-2">
      <Button asChild>
        <Link href='/login'>
        Log in
        </Link>
        </Button>
      <span>Or</span>
      <Button variant="outline" asChild>
        <Link href='/sign-up'>
        Sign up
        </Link>
        </Button>
    </div>
    </>
  );
};

export default LandingPage;
