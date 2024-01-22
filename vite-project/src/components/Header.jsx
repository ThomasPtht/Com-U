import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between m-8">
      <div className="flex items-center">
        <h1 className="font-title text-3xl text-indigo-400">
          <span className="rounded-lg bg-indigo-400 p-1.5 text-white tracking-widest">
            Com
          </span>
          <span className="rounded-2xl bg-indigo-200 p-1 tracking-widest">
            &U
          </span>
        </h1>
      </div>
      <nav className="flex">
        <ul className="flex items-center text-lg text-indigo-400">
          <li className="pl-8">Accueil</li>
          <li className="pl-8">A propos</li>
          <li className="pl-8">Services</li>
        </ul>
        <button className="ml-8 p-2 rounded-lg bg-indigo-400 text-white text-lg">
          Contactez-nous
        </button>
      </nav>
    </div>
  );
}

export default Header;
