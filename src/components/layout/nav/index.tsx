import React from "react";
import { navLists } from "../../../utils/nav-list";
import { Link, useLocation } from "react-router-dom";
import {
  BriefCaseIcon,
  CaretArrowDownIcon,
  LogoutIcon,
} from "../../../assets/svg";
import { useOutsideClick } from "../../../hooks";

interface ISideNavProps {
  showMenu: boolean;
  handleToggleMenu: () => void;
}

export const SideNav: React.FC<ISideNavProps> = ({
  showMenu,
  handleToggleMenu,
}) => {
  const { pathname } = useLocation();
  const navRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: navRef,
    handler: () => {
      if (window.innerWidth < 1024) {
        handleToggleMenu();
      }
    },
  });

  return (
    <nav ref={navRef} className={`_nav ${showMenu ? "show" : ""}`}>
      <Link to="" className="active switch">
        <BriefCaseIcon /> Switch Organization <CaretArrowDownIcon />
      </Link>

      <div className="nav_list_wrapper">
        {navLists.map(({ children, name }, id) => (
          <ul key={id} className="parent_list_group">
            <li className="p_list">{name}</li>

            <ul className="child_list_group">
              {children.map(({ name, link, icon }, index) => (
                <li key={index} className="c_list">
                  <Link
                    to={link}
                    onClick={handleToggleMenu}
                    className={`link ${pathname == link ? "active" : ""}`}
                  >
                    {icon} {name}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        ))}

        <div className="footer_list">
          <hr />
          <Link to="" className="active switch">
            <LogoutIcon /> Logout
          </Link>

          <small className="version">v1.2.0</small>
        </div>
      </div>
    </nav>
  );
};
