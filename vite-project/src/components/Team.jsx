import React from "react";
import CardTeam from "../components/CardTeam";
import nicolas from "../assets/portrait-baudard-nicolas.webp";
import laurent from "../assets/portrait-gaucher-laurent.webp";
import julien from "../assets/portrait-lefort-julien.webp";
import julie from "../assets/portrait-renaud-julie.webp";
import marion from "../assets/portrait-sougere-marion.webp";
import bertrand from "../assets/portrait-lenoble-bertrand.webp";

function Team() {
  return (
    <section className="relative">
      <h2 className="text-center mt-4 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl pb-8 ">
        Rencontrez l'équipe !
      </h2>
      <p className="text-center">
        Chez{" "}
        <span className="text-lg text-indigo-600 font-semibold">Com&U</span>,
        nous formons une équipe diversifiée et talentueuse, unie par la passion
        de créer des expériences exceptionnelles. <br /> Chaque membre apporte
        son expertise unique, de la direction stratégique à l'exécution
        créative, pour offrir à nos clients des solutions innovantes et
        impactantes. <br />
        Découvrez les visages derrière notre réussite.
      </p>
      <div className="m-6 grid grid-cols-2 md:grid-cols-3 md:m-20 justify-items-center gap-y-8">
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
    </section>
  );
}

export default Team;
