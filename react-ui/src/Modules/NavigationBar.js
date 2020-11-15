import React from "react";

import "../Modules/NavigationBar.css";

const Logo = () => {
  return (
    <div className='LogoContainer'>
      <img
        src='https://via.placeholder.com/75'
        alt='Placeholder'
        className='LogoImg'
      />
      <h5 className='LogoText'>Baer-Tutor</h5>
    </div>
  );
};

export const NavigationBar = () => {
  return (
    <div className='NavigationBarContainer'>
      <Logo />
      <ul className='LinkList'>
        <li className='listItem'>Home</li>
        <li className='listItem'>Programming</li>
        <li className='listItem'>Design</li>
        <li className='listItem'>Math</li>
      </ul>
    </div>
  );
};
