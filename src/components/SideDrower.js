import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        About Us
      </a>
      <a className="menu-item" href="/pizzas">
        Mail ID
      </a>
      <a className="menu-item" href="/desserts">
        Contact Us
      </a>
    </Menu>
  );
};