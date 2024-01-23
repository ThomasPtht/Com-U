import React from "react";
import CardTeam from "../components/CardTeam";
import nicolas from "../assets/portrait-baudard-nicolas.jpg";
import laurent from "../assets/portrait-gaucher-laurent.jpg";
import julien from "../assets/portrait-lefort-julien.jpg";
import julie from "../assets/portrait-renaud-julie.jpg";
import marion from "../assets/portrait-sougere-marion.jpg";
import bertrand from "../assets/portrait-lenoble-bertrand.jpg";

function Team() {
  return (
    <div>
      <h2 className="text-center text-2xl pb-8 font-semibold">
        Rencontrez l'équipe !
      </h2>
      <p className="text-center m-">
        Chez <span className="text-indigo-600 font-semibold">Com&U</span>, nous
        formons une équipe diversifiée et talentueuse, unie par la passion de
        créer des expériences exceptionnelles. <br /> Chaque membre apporte son
        expertise unique, de la direction stratégique à l'exécution créative,
        pour offrir à nos clients des solutions innovantes et impactantes.{" "}
        <br />
        Découvrez les visages derrière notre réussite.
      </p>
      <div className="m-20 grid grid-cols-3 justify-items-center gap-y-8">
        <CardTeam picture={laurent} name="Laurent Gaucher" job="Directeur" />

        <CardTeam picture={julie} name="Julie Renaud" job="Chef de projet" />

        <CardTeam
          picture={bertrand}
          name="Bertrand Lenoble"
          job="Spécialiste SEO"
        />

        <CardTeam picture={julien} name="Julien Lefort" job="Designer" />

        <CardTeam
          picture={marion}
          name="Marion Sougère"
          job="Community manager"
        />

        <CardTeam
          picture={nicolas}
          name="Nicolas Baudard"
          job="Développeur web"
        />
      </div>
    </div>
  );
}

export default Team;
