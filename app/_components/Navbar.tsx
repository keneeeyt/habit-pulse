"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import LogoName from "./LogoName";

const Navbar = () => {
  const { userId } = useAuth();

  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* Icon + Name of the App */}
            {/* ----------------------- */}
            <LogoName />
          </div>
          <div>
            {userId ? (
              <Link href={"/dashboard"}>
                <Button className="w-full sm:w-auto">
                  <span className="text-white">Dashboard</span>
                </Button>
              </Link>
            ) : (
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={"/sign-in"}>
                  <Button className="w-full sm:w-auto">
                    <span className="text-white">Sign In</span>
                  </Button>
                </Link>
                <Link href={"/sign-up"}>
                  <Button variant={"outline"} className="w-full sm:w-auto">
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
