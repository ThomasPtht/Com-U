import React from "react";

function CardTeam({ picture, name, job }) {
  return (
    <div className="text-center">
      <img
        className="w-28 h-28 rounded-full md:w-40 md:h-40 object-cover "
        src={picture}
        alt=""
      />

      <p className="text-indigo-600 font-semibold pt-2">{name}</p>
      <p className="">{job}</p>
    </div>
  );
}

export default CardTeam;
