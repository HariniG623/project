import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Medingen Project</h1>

      <nav className="navbar">
        <a className="space" href="#home">
          {" "}
          Home{" "}
        </a>
        <a className="space" href="#products">
          {" "}
          Products{" "}
        </a>
        <a className="space" href="#faq">
          {" "}
          FAQ{" "}
        </a>
        <a className="space" href="#contact">
          {" "}
          Contact{" "}
        </a>
      </nav>
    </header>
  );
};

export default Header;
