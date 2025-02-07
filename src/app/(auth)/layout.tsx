import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center justify-center h-screen bg-hero-bg">
      {children}
    </main>
  );
};

export default layout;
