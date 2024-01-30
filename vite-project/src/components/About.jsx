import React from "react";
import aboutPic from "../assets/colleagues-working-office.jpg";

function About() {
  return (
    <div id="about">
      <div className="flex flex-col my-16 sm:mx-2 xl:mx-20 lg:flex-row">
        <img
          className="rounded-lg mb-8 w-4/6 lg:w-3/6 mx-auto object-cover "
          src={aboutPic}
          alt=""
        />

        <div className="mx-4 sm:ml-10">
          <div className="w-32 text-sm sm:text-base sm:w-40 mb-6 rounded-full p-2 bg-indigo-400 text-white text-center">
            A propos de nous{" "}
          </div>
          <h2 className="my-10 text-2xl font-semibold">
            Nous offrons notre savoir faire depuis +20 ans
          </h2>
          <p className="mb-10 text-sm sm:text-base">
            Notre agence de communication capitalise sur plus de 20 ans
            d'expérience. Expertise et créativité sont au cœur de notre
            approche. Nous nous adaptons constamment aux évolutions du marché,
            restant à l'affût des dernières technologies et tendances. <br />
            <br />
            Notre savoir-faire se traduit par une approche personnalisée, une
            créativité sans limite et une passion constante pour l'excellence.
            Prêts à relever les défis, nous grandissons aux côtés de nos
            clients, les aidant à atteindre leurs objectifs de communication
            avec expertise et engagement.
          </p>

          <div className="text-sm sm:text-base grid grid-cols-2 gap-4">
            <div className="flex">
              <svg
                className="w-5 sm:w-6"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="indigo"
              >
                <path
                  d="m9.831 16.198.002-.003-1.113-.996-.004.004-2.468-2.202c-.144-.128-.322-.191-.5-.191-.417 0-.749.337-.749.75 0 .206.084.412.249.56l2.478 2.21-.767.873-4.71-4.202c-.144-.128-.322-.191-.5-.191-.416 0-.749.337-.749.75 0 .206.084.412.25.56l5.268 4.7c.143.128.321.191.499.191.206 0 .41-.084.559-.25l1.264-1.437 1.677 1.496c.143.128.321.191.499.191.206 0 .409-.084.558-.25l11.234-12.499c.129-.143.192-.322.192-.501 0-.419-.338-.75-.748-.75-.206 0-.411.084-.559.249l-10.735 11.943zm-.451-1.75 1.114.996 8.316-9.182c.128-.143.191-.322.191-.501 0-.419-.337-.75-.748-.75-.206 0-.411.084-.559.249z"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="pl-2 font-semibold">Innovation continuelle </p>
            </div>

            <div className="flex">
              <svg
                className="w-5 sm:w-6"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="indigo"
              >
                <path
                  d="m9.831 16.198.002-.003-1.113-.996-.004.004-2.468-2.202c-.144-.128-.322-.191-.5-.191-.417 0-.749.337-.749.75 0 .206.084.412.249.56l2.478 2.21-.767.873-4.71-4.202c-.144-.128-.322-.191-.5-.191-.416 0-.749.337-.749.75 0 .206.084.412.25.56l5.268 4.7c.143.128.321.191.499.191.206 0 .41-.084.559-.25l1.264-1.437 1.677 1.496c.143.128.321.191.499.191.206 0 .409-.084.558-.25l11.234-12.499c.129-.143.192-.322.192-.501 0-.419-.338-.75-.748-.75-.206 0-.411.084-.559.249l-10.735 11.943zm-.451-1.75 1.114.996 8.316-9.182c.128-.143.191-.322.191-.501 0-.419-.337-.75-.748-.75-.206 0-.411.084-.559.249z"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="pl-2 font-semibold">Analyse données précise</p>
            </div>

            <div className="flex">
              <svg
                className="w-5 sm:w-6"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="indigo"
              >
                <path
                  d="m9.831 16.198.002-.003-1.113-.996-.004.004-2.468-2.202c-.144-.128-.322-.191-.5-.191-.417 0-.749.337-.749.75 0 .206.084.412.249.56l2.478 2.21-.767.873-4.71-4.202c-.144-.128-.322-.191-.5-.191-.416 0-.749.337-.749.75 0 .206.084.412.25.56l5.268 4.7c.143.128.321.191.499.191.206 0 .41-.084.559-.25l1.264-1.437 1.677 1.496c.143.128.321.191.499.191.206 0 .409-.084.558-.25l11.234-12.499c.129-.143.192-.322.192-.501 0-.419-.338-.75-.748-.75-.206 0-.411.084-.559.249l-10.735 11.943zm-.451-1.75 1.114.996 8.316-9.182c.128-.143.191-.322.191-.501 0-.419-.337-.75-.748-.75-.206 0-.411.084-.559.249z"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="pl-2 font-semibold">Visibilité accrue en ligne</p>
            </div>

            <div className="flex">
              <svg
                className="w-5 sm:w-6"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="indigo"
              >
                <path
                  d="m9.831 16.198.002-.003-1.113-.996-.004.004-2.468-2.202c-.144-.128-.322-.191-.5-.191-.417 0-.749.337-.749.75 0 .206.084.412.249.56l2.478 2.21-.767.873-4.71-4.202c-.144-.128-.322-.191-.5-.191-.416 0-.749.337-.749.75 0 .206.084.412.25.56l5.268 4.7c.143.128.321.191.499.191.206 0 .41-.084.559-.25l1.264-1.437 1.677 1.496c.143.128.321.191.499.191.206 0 .409-.084.558-.25l11.234-12.499c.129-.143.192-.322.192-.501 0-.419-.338-.75-.748-.75-.206 0-.411.084-.559.249l-10.735 11.943zm-.451-1.75 1.114.996 8.316-9.182c.128-.143.191-.322.191-.501 0-.419-.337-.75-.748-.75-.206 0-.411.084-.559.249z"
                  fill-rule="nonzero"
                />
              </svg>
              <p className="pl-2 font-semibold">Solution personnalisée</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
