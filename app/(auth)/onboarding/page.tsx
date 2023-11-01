import React from "react";
import { currentUser } from "@clerk/nextjs";
import AccountProfile from "@/components/forms/AccountProfile";
import { USER_DATA } from "@/types/inex";

const page = async () => {
  const user = await currentUser();
  const userInfo = {};
  const userData: USER_DATA = {
    id: user?.id || "",
    objectId: userInfo?.id || "",
    username: user?.username || userInfo.username,
    name: userInfo?.name || user?.username || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto max-w-3xl flex flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile to use Thread
      </p>
      <section className=" mt-9 p-10 bg-dark-2">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;
