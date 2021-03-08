import React from "react";
import Searchbox from "../Searchbox"
function Nav(props) {
      return (
      <nav >This is my main nav.
          <Searchbox 
          handleSearchChange={props.handleSearchChange}
          />
      </nav>
      );
}

export default Nav;