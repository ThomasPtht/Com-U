import React from "react";
import mood from "../assets/lady-great-mood.jpg";

function CallAction(props) {
  return (
    <div className="flex m-20 rounded-xl bg-indigo-50 shadow-lg">
      <div className="m-12">
        <h2 className="mt-4 text-3xl font-bold text-gray-700 sm:text-3xl xl:text-4xl pb-8 ">
          Propulsez votre marque vers l'excellence : agissez stratégiquement
          avec notre agence !
        </h2>
        <p className="">
          Dans l'ère numérique, le marketing est la clé de la réussite. Notre
          agence excelle dans le marketing digital, vous propulsant au sommet
          avec des stratégies innovantes. Ne sous-estimez pas le pouvoir du
          digital. Agissez maintenant pour transformer votre présence en ligne
          et stimuler votre croissance. Ensemble, construisons votre succès dans
          le monde digital!
        </p>

        <button className="w-50 h-12 rounded-2xl p-2 bg-teal-500 text-white font-semibold hover:opacity-80 mt-14">
          Commencez maintenant
        </button>
      </div>
      <img className="w-60 h-70 rounded-3xl m-10 shadow-lg" src={mood} alt="" />
    </div>
  );
}

export default CallAction;
