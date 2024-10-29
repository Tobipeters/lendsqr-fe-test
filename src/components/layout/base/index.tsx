import React from "react";
import { Header } from "../header";
import { SideNav } from "../nav";
import { Outlet } from "react-router-dom";

interface IBaseLayoutProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <React.Fragment>
      <Header handleToggleMenu={handleToggleMenu} />
      <div className="base_container">
        <SideNav showMenu={showMenu} />
        <main className="main_content">
          {children}
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
};
