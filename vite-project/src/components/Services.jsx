import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div id="services" className="relative">
      <h2 className="p-6 mt-10 text-3xl font-bold text-gray-700 sm:text-4xl xl:text-5xl text-center">
        Nos services de marketing numérique{" "}
      </h2>
      <div className="flex flex-wrap justify-center gap-12 m-20">
        <Card
          icon={
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="white"
            >
              <path d="M22.5 7c.828 0 1.5.672 1.5 1.5v14c0 .826-.671 1.5-1.5 1.5h-7c-.829 0-1.5-.675-1.5-1.5v-14c0-.827.673-1.5 1.5-1.5h7zm-8.907 17h-9.593l2.599-3h6.401v1.804c0 .579.336 1.09.593 1.196zm5.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm4-3v-10.024h-8v10.024h8zm-1-14h-2v-4h-18v15h11v2h-13v-19h22v6zm-2.5 3c.275 0 .5-.224.5-.5s-.225-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1z" />
            </svg>
          }
          title="Création/Optimisation site web"
          text="Concevez un site web captivant et optimisez-le pour un impact maximal. De la création à l'optimisation continue, nous façonnons une présence en ligne puissante et performante."
        />
        <Card
          icon={
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="white"
            >
              <path d="M14.757 20.171c-.791.523-1.738.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.019-.306 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-9.082-1.171c-3.438 0-5.675-2.629-5.675-5.5 0-2.702 1.951-4.945 4.521-5.408.212-3.951 3.473-7.092 7.479-7.092s7.267 3.141 7.479 7.092c2.57.463 4.521 2.706 4.521 5.408 0 2.855-2.218 5.5-5.675 5.5.3-.63.508-1.31.608-2.026 1.726-.214 3.067-1.691 3.067-3.474 0-2.969-2.688-3.766-4.432-3.72.323-3.983-2.115-6.78-5.568-6.78-3.359 0-5.734 2.562-5.567 6.78-1.954-.113-4.433.923-4.433 3.72 0 1.783 1.341 3.26 3.068 3.474.099.716.307 1.396.607 2.026m6.325-6c1.655 0 3 1.345 3 3s-1.345 3-3 3c-1.656 0-3-1.345-3-3s1.344-3 3-3" />
            </svg>
          }
          title="Référencement SEO"
          text="Boostez votre visibilité en ligne avec notre expertise SEO. De l'optimisation on-page à la stratégie de backlinks, nous maximisons votre classement sur les moteurs de recherche."
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z" />
            </svg>
          }
          title="Analyse données"
          text="Transformez vos données en insights stratégiques avec nos services d'analyse. Des rapports détaillés à la prise de décision informée, nous maximisons la valeur de vos informations."
        />
        <Card
          icon={
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M16 0c-3.169 0-6 2.113-6 5.003 0 1.025.369 2.032 1.023 2.812.027.916-.512 2.228-.996 3.184 1.301-.235 3.15-.754 3.988-1.268.708.172 1.387.251 2.028.251 3.543 0 5.956-2.418 5.956-4.98.001-2.904-2.85-5.002-5.999-5.002zm-2.5 5.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-6.5 6.854v5.396h-8v-10h4.766c-.649-1.216-.913-2.564-.674-4h-4.092c-1.105 0-2 .896-2 2v14.678c-.002 2.213 2.503 3.322 6.006 3.322 3.498 0 5.994-1.106 5.994-3.322v-8.725c-.635.257-1.34.476-2 .651zm-4 9.396c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z" />
            </svg>
          }
          title="Réseaux sociaux"
          text="Amplifiez votre influence sociale avec notre gestion experte des réseaux sociaux. De la création de contenu à l'engagement, nous renforçons votre présence digitale de manière impactante."
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M13.333 6.805l4.213 7.297-13.256 3.223c-.572.133-1.068.333-1.492.604l-.227-.393c.525-.293.929-.675 1.227-.993l9.535-9.738zm.332-2.626l-11.011 11.244c-.616.66-1.164.977-1.857.977-.244 0-.507-.04-.797-.117l2.646 4.585c.258-1.094.814-1.708 2.006-1.985l15.348-3.732-6.335-10.972zm.31 13.951l-.467 2.118c-.094.378-.391.674-.77.771l-2.951.774c-.365.095-.754-.012-1.018-.28l-1.574-1.712 1.605-.395.646.77c.176.177.433.248.675.186l1.598-.425c.252-.064.449-.261.511-.512l.161-.906 1.584-.389zm8.719-11.267l-2.684 1.613-.756-1.262 2.686-1.612.754 1.261zm-4.396-1.161l-1.335-.616 1.342-2.914 1.335.617-1.342 2.913zm5.619 6.157l-3.202-.174.081-1.469 3.204.175-.083 1.468z" />
            </svg>
          }
          title="Campagnes marketing"
          text="Orchestrez des campagnes marketing percutantes avec notre expertise. Du planning stratégique à l'exécution, nous optimisons chaque étape pour accroître votre influence et vos résultats."
        />
      </div>
    </div>
  );
}

export default Services;
