import React from "react";
import { Header } from "../header";
import { SideNav } from "../nav";
import { Outlet } from "react-router-dom";

interface IBaseLayoutProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="">
        <SideNav />
        <main>
          {children}
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
};
