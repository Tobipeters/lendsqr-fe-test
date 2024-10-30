import React from "react";
import { navLists } from "../../../utils/nav-list";
import { Link, useLocation } from "react-router-dom";
import {
  BriefCaseIcon,
  CaretArrowDownIcon,
  LogoutIcon,
} from "../../../assets/svg";

interface ISideNavProps {
  showMenu: boolean;
}

export const SideNav: React.FC<ISideNavProps> = ({ showMenu }) => {
  const { pathname } = useLocation();

  return (
    <nav className={`_nav ${showMenu ? "show" : ""}`}>
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
