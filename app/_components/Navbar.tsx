import { Button } from "@/components/ui/button";
import React from "react";
import AppIcon from "./AppIcon";

const Navbar = () => {
  const defaultColor = "#d90429";
  const backgroundColorObject = { backgroundColor: defaultColor };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* Icon + Name of the App */}
            {/* ----------------------- */}
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                <div className="p-2 rounded-md bg-primary">
                  <AppIcon color="#ffffff" height="34" width="34" />
                </div>
                {/* The name of the app */}
                <span className="font-bold text-primary">Habit</span>
                <span className="font-light">Pulse</span>
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Button>
              <span className="text-white">Sign In</span>
            </Button>
            <Button>
              <span className="text-white">Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
