import React from "react";
import { navLists } from "../../../utils/nav-list";
import { Link } from "react-router-dom";

interface ISideNavProps {
  showMenu: boolean;
}

export const SideNav: React.FC<ISideNavProps> = ({ showMenu }) => {
  return (
    <nav className={`_nav ${showMenu ? "show" : ""}`}>
      {navLists.map(({ children, name }, id) => (
        <ul key={id} className="parent_list_group">
          <li className="p_list">{name}</li>

          <ul className="child_list_group">
            {children.map(({ name, link, icon }, index) => (
              <li key={index} className="c_list">
                <Link to={link} className="link">
                  {icon} {name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </nav>
  );
};
