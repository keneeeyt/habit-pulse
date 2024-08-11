"use client"
import { useUser, SignOutButton } from "@clerk/nextjs";
import React from "react";


function Dashboard() {
  const {user} = useUser();
  return(
    <div>
      Hello, {user?.lastName} <SignOutButton>SignOut</SignOutButton>
    </div>
  );
}

export default Dashboard;
