import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
      <span className="text-3xl text-center">
        Track Your Habits with{" "}
        <span className="font-bold text-primary">Habit Pulse</span>
      </span>
      <p className="text-center font-light text-sm sm:w-[430px] w-[370px]">
        Habit Pulse is your personal companion for tracking daily habits and
        routines. Stay motivated, monitor your progress, and transform your
        goals into reality with actionable insights.
      </p>
      <Button>{`Lets's get started! `}</Button>
    </div>
  );
};

export default HeroSection;
