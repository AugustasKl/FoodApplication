import React, { useState } from "react";
import classes from "./Header.module.css";
import meals from "../../src/assets/meals (1).jpg";
import HeaderCartButton from "./HeaderCart";
const Header = (props) => {
    
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals image" />
      </div>
    </React.Fragment>
  );
};
export default Header;
