import { Button } from "@/components/ui/button";
import React from "react";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle.js";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-all duration-300">
      <div className="flex flex-col items-center text-black dark:text-white">
        <h1>Next js Theme Changing Demo Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          debitis!
        </p>
        <div className="flex gap-3">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </div>
          <ThemeToggle />
      </div>
    </div>
  );
};

export default page;
