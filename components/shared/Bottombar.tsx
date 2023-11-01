"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.label}
              className={`bottombar_link hover:bg-dark-4 cursor-pointer ${
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
              <p className="text-subtle-medium text-light-1 max-sm:hidden ">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
