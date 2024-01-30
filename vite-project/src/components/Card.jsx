import React from "react";

function Card({ icon, title, text }) {
  return (
    <div className="">
      <div className="relative w-72 h-80 p-4 rounded-lg bg-indigo-200 shadow-lg">
        <div className="flex items-center justify-center rounded-full w-12 p-3 bg-indigo-500">
          {icon}
        </div>
        <h3 className="pt-2 pb-2 font-semibold">{title}</h3>
        <p>{text}</p>
        <button className="w-28 absolute bottom-3 rounded-3xl p-2 bg-white text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white mt-8">
          En savoir +
        </button>
      </div>
    </div>
  );
}

export default Card;
