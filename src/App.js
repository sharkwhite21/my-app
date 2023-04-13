import "./App.css";
import "./styles/cards.css";
import Header from "./components/Header";
import Characters from "./components/Characters";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={"App " + bg}>
      <Header 
      darkMode={darkMode} 
      onClick={() => setDarkMode(!darkMode)} />
      <Characters  darkMode={darkMode}  />
    </div>
  );
}

export default App;
