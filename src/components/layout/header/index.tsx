import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/lendsqr-logo.svg";
import { LInput } from "../../input";
import React from "react";
import { LButton } from "../../button";
import { SearchIcon } from "../../../assets/svg";

export const Header = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  return (
    <header className="_header">
      <Link to="/dashboard" className="logo_wrapper">
        <img src={Logo} alt="Lendsqr logo" />
      </Link>
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

    <div className="user_info_wrapper">

    </div>
        </div>
      </div>
    </header>
  );
};
