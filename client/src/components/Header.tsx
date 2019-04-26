import * as React from "react";
import { useState, FunctionComponent } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

// this component is the header

const Header: FunctionComponent<{}> = () => {

  return (
    <>
      {<div className="header">
        <Menu secondary>
          <Menu.Item>
            <img id="logo" src="assets/chicken-advocate.png" alt="Chicken Advocate Logo" />
            <h1>Chicken Advocate</h1>
          </Menu.Item>
        </Menu>
      </div>
      }
    </>
  )
}

export default Header;