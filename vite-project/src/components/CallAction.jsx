import React from "react";
import mood from "../assets/lady-great-mood.webp";
import { Fade } from "react-awesome-reveal";

function CallAction(props) {
  return (
    <section className="m-0 p-0">
      <Fade direction="in" delay={200} fraction={0.2}>
        <div className="flex flex-col mx-6 my-16 sm:flex-row sm:m-10 md:m-14 lg:m-18 xl:m-36 rounded-xl bg-indigo-50 shadow-lg relative z-10">
          <div className="flex flex-col m-6 sm:m-10">
            <h2 className="mt-4 text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl  pb-8 ">
              Propulsez votre marque vers l'excellence : agissez stratégiquement
              avec notre agence !
            </h2>
            <p className="text-sm sm:text-base">
              Dans l'ère numérique, le marketing est la clé de la réussite.
              Notre agence excelle dans le marketing digital, vous propulsant au
              sommet avec des stratégies innovantes. Ne sous-estimez pas le
              pouvoir du digital. Agissez maintenant pour transformer votre
              présence en ligne et stimuler votre croissance. Ensemble,
              construisons votre succès dans le monde digital!
            </p>

            <button className="w-42 text-sm sm:text-normal sm:w-60 lg:h-12 rounded-2xl p-2 bg-teal-500 text-white font-semibold hover:opacity-80 mt-14">
              Commencez maintenant
            </button>
          </div>
          <img
            className="w-4/6 h-5/6 sm:w-64 mx-auto m-4 sm:w-48 w-60 sm:m-8 object-cover rounded-2xl shadow-lg overflow"
            src={mood}
            alt=""
          />
        </div>
      </Fade>

      <svg
        className="w-full h-14"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
          fill="#E0E7FF"
          fill-opacity="1"
        ></path>
      </svg>
    </section>
  );
}

export default CallAction;
