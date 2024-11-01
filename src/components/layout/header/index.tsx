import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/lendsqr-logo.svg";
import { LInput } from "../../input";
import React from "react";
import { LButton } from "../../button";
import {
  CaretDownIcon,
  MenuIcon,
  NotificationIcon,
  SearchIcon,
} from "../../../assets/svg";
import AvatarImg from "../../../assets/images/avatar.png";

interface IHeaderProps {
  handleToggleMenu: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ handleToggleMenu }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  return (
    <header className="_header">
      <div onClick={handleToggleMenu} className="hamburger_menu">
        <MenuIcon />
      </div>

      <div className="logo_container">
        <Link to="/dashboard" className="logo_wrapper">
          <img src={Logo} alt="Lendsqr logo" />
        </Link>
      </div>

      <div className="menu_bar">
        <div className="search_bar">
          <LInput
            _size="md"
            placeholder="Search for anything"
            name="searchValue"
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
          />
          <LButton size="md">
            <SearchIcon />
          </LButton>
        </div>

        <div className="r_menu">
          <Link to="#" className="doc_link">
            Doc
          </Link>

          <div className="bell_icon">
            <NotificationIcon />
          </div>

          <div className="user_info_wrapper">
            <img src={AvatarImg} className="avatar" alt="user avatar" />
            <span className="name">
              Oluwatobi
              <CaretDownIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
