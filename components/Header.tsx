"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const user = useUser();

  return (
    <section className="flex items-center justify-between p-5 border ">
      <h1>
        {user.isSignedIn ? `${user.user?.firstName}'s Space` : "Notion Clone"}{" "}
      </h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </section>
  );
};

export default Header;
