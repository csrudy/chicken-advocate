import * as React from "react";
import { useState, FunctionComponent } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

// const Header = (props) => {
//   return (
//     <div>
//       <h1>Chicken Advocate</h1>
//     </div>
//   )
// }

const Header: FunctionComponent<{ setLogin: (bool:boolean) => any, setImage: (num:number) => any, loggedIn: boolean }> = ({setLogin, setImage, loggedIn}) => {

  const handleItemClick = (e:React.SyntheticEvent, props:MenuItemProps) => {
    setActive(props.name);
    setImage(parseInt(props.id));
  };

  const [activeItem, setActive] = useState();

  return (
  <>
    { <Menu secondary>
        <Menu.Item>
          <img id='logo' src='assets/chicken-advocate.png' alt='Chicken Advocate Logo' />
        </Menu.Item>
        <Menu.Item name='ratings' id='0' active={activeItem === 'ratings'} onClick={handleItemClick}>
          Ratings
        </Menu.Item>

        <Menu.Item name='restaurants' id='1' active={activeItem === 'restaurants'} onClick={handleItemClick}>
          Restaurants
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='login' id='2' active={activeItem === 'login'} onClick={handleItemClick}>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    }
  </>
  )
}

export default Header;