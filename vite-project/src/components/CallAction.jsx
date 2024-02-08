import React from "react";
import mood from "../assets/lady-great-mood.webp";

function CallAction(props) {
  return (
    <div className="flex flex-col mx-6 my-16 sm:flex-row sm:m-10 md:m-14 lg:m-20 rounded-xl bg-indigo-50 shadow-lg">
      <div className="flex flex-col m-6 sm:m-10">
        <h2 className="mt-4 text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl  pb-8 ">
          Propulsez votre marque vers l'excellence : agissez stratégiquement
          avec notre agence !
        </h2>
        <p className="text-sm sm:text-base">
          Dans l'ère numérique, le marketing est la clé de la réussite. Notre
          agence excelle dans le marketing digital, vous propulsant au sommet
          avec des stratégies innovantes. Ne sous-estimez pas le pouvoir du
          digital. Agissez maintenant pour transformer votre présence en ligne
          et stimuler votre croissance. Ensemble, construisons votre succès dans
          le monde digital!
        </p>

        <button className="w-42 text-sm sm:text-normal sm:w-60 lg:h-12 rounded-2xl p-2 bg-teal-500 text-white font-semibold hover:opacity-80 mt-14">
          Commencez maintenant
        </button>
      </div>
      <img
        className="w-40 h-42 m-4 mx-auto sm:m-8 object-cover rounded-3xl shadow-lg "
        src={mood}
        alt=""
      />
    </div>
  );
}

export default CallAction;
