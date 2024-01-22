import React from "react";

function Card({ icon, title, text }) {
  return (
    <div>
      <div className="w-40 h-300 rounded-xl bg-violet-500">
        <div className="rounded [40%/80%_30%_40%_60%] bg-indigo-500">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>En savoir plus</button>
      </div>
    </div>
  );
}

export default Card;
