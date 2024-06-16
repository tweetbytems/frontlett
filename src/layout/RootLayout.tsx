import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[40dvh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
