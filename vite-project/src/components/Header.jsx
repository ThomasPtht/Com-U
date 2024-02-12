import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Header() {
  // État local pour gérer la visibilité du menu burger
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer la visibilité du menu burger
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Ajoute ou retire la classe 'overflow-hidden' au corps du document
    document.body.classList.toggle("overflow-y-hidden", isOpen);

    // Nettoie l'effet lorsque le composant est démonté
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  return (
    <header>
      <div className="flex items-center justify-between mt-6 mx-4  lg:mx-6">
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

        {/* Burger Menu */}
        <div
          className={`w-screen h-screen bg-indigo-300 text-white text-2xl font-bold pt-8 gap-3 text-center fixed top-24 right-0 z-10 flex flex-col translate-x duration-1000 ease-in-out sm:hidden  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            className="hover:bg-white hover:text-indigo-300"
            to="/"
            onClick={toggleNavbar}
          >
            Accueil
          </Link>
          <a
            href="/#about"
            className="hover:bg-white hover:text-indigo-300"
            onClick={toggleNavbar}
          >
            A propos
          </a>
          <a
            href="/#services"
            className="hover:bg-white hover:text-indigo-300"
            onClick={toggleNavbar}
          >
            Services
          </a>
          <Link
            className="hover:bg-white hover:text-indigo-300"
            to="/contact"
            onClick={toggleNavbar}
          >
            Contactez-nous
          </Link>
        </div>
        {/* Bouton de toggle avec icône de burger */}
        <button
          className={`z-20 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200 mt-4 sm:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Bouton de toggle avec l'icône de croix (X) */}
        <button
          className={` z-20 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200 mt-4 ${
            isOpen ? "" : "hidden"
          }`}
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Menu nav classique */}
        <nav className="hidden sm:flex">
          <ul className="flex items-center text-lg text-indigo-400">
            <li className="pl-8 hover:opacity-50">
              <Link to="/">Accueil</Link>
            </li>
            <a href="/#about">
              <li className="pl-8 hover:opacity-50">A propos</li>
            </a>
            <a href="/#services">
              <li className="pl-8 hover:opacity-50">Services</li>
            </a>
          </ul>
          <button className="ml-8 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200">
            <Link to="/contact"> Contactez-nous</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
