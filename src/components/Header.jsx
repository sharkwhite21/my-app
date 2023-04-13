import React, {useContext, useState }from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = ( props ) => {

  // const [darkMode, setDarkMode] = useState(false);

  const color = useContext(ThemeContext)
  // let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className="Header">
      <h1 style={{color}}>ReactHooks</h1>
      <button  type='button' onClick={()=>props.onClick()}> {props.darkMode ? "Light Mode" : "Dark Mode"}</button>
    </div>
  );
}

export default Header;