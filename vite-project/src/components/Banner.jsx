import React from "react";
import bannerPic from "../assets/woman-with-laptop.webp";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className=" flex flex-col sm:flex-row items-center justify-around bg-gradient-to-t from-indigo-100">
      <div className="p-4 sm:p-8">
        <Fade direction="up">
          <h2 className="text-xl pt-6 sm:pt-0 sm:text-3xl text-gray-600 font-bold sm:mb-10 md:text-4xl ">
            Sublimez votre présence, <br />
            Élevez votre influence 💫
          </h2>
          <p className="text-sm sm:text-base lg:text-md text-slate-500 my-8">
            Explorez notre solution digitale pour rehausser votre image de
            marque et renforcer votre présence en ligne. <br />
            De la création d'identité visuelle à la conception de sites web et à
            la gestion des réseaux sociaux, <br />
            notre équipe façonne une expérience numérique captivante pour
            propulser votre entreprise vers de nouveaux sommets.
          </p>

          <div>
            <Link to="/contact">
              <button className="text-xs w-28 md:text-base md:w-32 rounded-2xl p-2 bg-violet-600 text-white mr-4 font-semibold hover:opacity-80">
                Contact
              </button>
            </Link>{" "}
            <button className="text-xs w-28 md:text-base md:w-40 rounded-2xl p-2 bg-teal-500 text-white font-semibold hover:opacity-80">
              <a href="#services"> Nos services </a>
            </button>
          </div>
        </Fade>
      </div>

      {/* IMAGE */}
      <div className="mb-5">
        <div className="relative sm:mr-4 lg:mr-8">
          <img
            className="hidden relative sm:block mt-20 mr-14 w-80 h-100 rounded-[70%/80%_30%_40%_60%] bg-indigo-300 shadow-xl"
            src={bannerPic}
            alt="woman sitting floor with laptop"
          />

          {/* ICONES */}
          {/* Ligth */}
          <div className="hidden sm:block absolute -rotate-12 top-8 md:top-14 lg:top-20 p-4 bg-red-100 border-1 rounded-full border-red-700">
            <svg
              className="sm:w-5 sm:h-5 md:w-7 md:h-7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="orange"
            >
              <path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
            </svg>
          </div>

          {/* Megaphone */}
          <div className="hidden sm:flex items-end sm:block absolute -rotate-12 bottom-0 left-0 p-3 bg-teal-100 border-1 rounded-full border-teal-700 shadow-lg">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="green"
            >
              <path d="M17.561 5.663c.856.411 1.556 1.149 1.893 2.117.339.967.254 1.98-.157 2.836l1.407.678c.585-1.216.708-2.656.227-4.03-.481-1.375-1.474-2.424-2.689-3.009l-.681 1.408zm1.188-2.465c1.486.715 2.698 1.998 3.286 3.678s.438 3.441-.277 4.927l1.443.696c.893-1.857 1.079-4.055.346-6.153-.734-2.098-2.247-3.698-4.102-4.591l-.696 1.443zm-10.932 12.494l-2.342-6.437-3.24 1.179c-1.766.643-2.673 2.605-2.025 4.382.646 1.777 2.603 2.697 4.368 2.055l3.239-1.179zm-6.321-1.343c-.387-1.065.153-2.244 1.207-2.626l1.951-.711 1.406 3.862-1.952.71c-1.052.383-2.224-.171-2.612-1.235zm11.818-11.592l4.686 12.873c-3.82-.802-6.74-.82-8.896-.407l-.471-1.296c2.06-.431 4.495-.453 7.267-.06l-3.06-8.407c-1.876 2.097-3.723 3.613-5.606 4.624l-.472-1.297c1.892-1.052 4.08-2.881 6.552-6.03zm-2.453 17.276c-.436-.151-.815-.429-1.09-.797l-1.637-2.194-3.956 1.441 2.603 3.34c.294.375.794.518 1.239.356l2.872-1.045c.229-.084.383-.304.381-.549-.002-.246-.156-.463-.389-.543l-.023-.009zm-3.121.79l-1.335-1.701 1.244-.453 1.3 1.713-1.209.441z" />
            </svg>
          </div>

          {/* facebook */}
          <div className="hidden sm:block absolute sm:bottom-[-16px] sm:right-[-20px] lg:bottom-[-8px] lg:right-[-14px] 2xl:right-0 rotate-12  p-3 border-1 rounded-full border-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="skyblue"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </div>

          {/* instagram */}
          <div className="hidden sm:block absolute -rotate-12 top-[-48px] right-12 p-3 bg-teal-100 border-1 rounded-full border-teal-700 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="green"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
