import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between mt-6 mx-4 sm:mx-10">
      <div className="flex items-center">
        <Slide direction="left">
          <h1 className="font-title text-2xl sm:text-3xl text-indigo-400">
            <span className="rounded-lg bg-indigo-400 p-1.5 text-white tracking-widest">
              Com
            </span>
            <span className="rounded-2xl bg-indigo-200 p-1 tracking-widest">
              &U
            </span>
          </h1>
        </Slide>
      </div>
      <nav className="flex">
        <ul className="flex items-center text-lg text-indigo-400">
          <li className="pl-8">
            <Link to="/">Accueil</Link>
          </li>
          <a href="#about">
            <li className="pl-8">A propos</li>
          </a>
          <a href="#services">
            <li className="pl-8">Services</li>
          </a>
        </ul>
        <button className="ml-8 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200">
          <Link to="/contact"> Contactez-nous</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header;
