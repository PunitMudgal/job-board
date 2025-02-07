import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-hero-bg">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
