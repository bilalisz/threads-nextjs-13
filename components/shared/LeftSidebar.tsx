"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

const LeftSidebar = () => {
  const route = useRouter();
  const pathname = usePathname();
  return (
    <section className="leftsidebar custom-scrollbar px-2">
      <div className="flex w-full flex-1 flex-col gap-2 px-0 justify-between">
        <div>
          {sidebarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <Link
                key={link.label}
                className={`leftsidebar_link hover:bg-dark-4 cursor-pointer ${
                  isActive && "bg-primary-500 hover:bg-primary-500"
                }`}
                href={link.route}
              >
                <Image
                  alt={link.label}
                  src={link.imgURL}
                  width={18}
                  height={18}
                />
                <p className="text-light-1 max-lg:hidden text-small-regular">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <SignedIn>
            <SignOutButton signOutCallback={() => route.push("/sign-in")}>
              <div className="flex items-center cursor-pointer leftsidebar_link hover:bg-dark-4">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={18}
                  height={18}
                />
                <p className="text-light-1 max-lg:hidden text-small-regular">
                  Logout
                </p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;

// <Link className="leftsidebar_link hover:bg-slate-400" href="#">
// <Image alt="logout" src="assets/logout.svg" width={18} height={18} />
// <p className="text-light-1 max-lg:hidden text-small-regular">
//   Logout
// </p>
// </Link>
