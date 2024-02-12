import React from "react";

function Form(props) {
  return (
    <section class="relative py-10 mt-6 bg-gray-100 sm:py-16 lg:py-24">
      <div class="px-4 pb-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Nous contacter
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Pour toute idée de projet ou si vous avez des questions, n'hésitez
            pas à nous contacter en remplissant le formulaire ci-dessous.
          </p>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div class="overflow-hidden bg-white rounded-xl">
              <div class="p-6">
                <svg
                  class="flex-shrink-0 w-10 h-10 mx-auto text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p class="mt-6 text-lg font-medium text-slate-700">
                  08 54 93 08 33
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-xl">
              <div class="p-6">
                <svg
                  class="flex-shrink-0 w-10 h-10 mx-auto text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p class="mt-6 text-lg font-medium text-slate-700">
                  contact@com-u.fr
                </p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-xl">
              <div class="p-6">
                <svg
                  class="flex-shrink-0 w-10 h-10 mx-auto text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="mt-6 text-lg font-medium leading-relaxed text-slate-700">
                  71 rue Reine Elisabeth, <br />
                  71000 Metz
                </p>
              </div>
            </div>
          </div>
          <div class="mt-6 overflow-hidden bg-white rounded-xl">
            <div class="px-6 py-12 sm:p-12">
              <h3 class="text-3xl font-semibold text-center text-gray-900">
                Envoyez-nous un message
              </h3>

              <form action="#" method="POST" class="mt-14">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Votre nom{" "}
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Entrez votre nom complet"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Adresse mail{" "}
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Entrez votre adresse mail"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Numéro de téléphone{" "}
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Entrez votre numéro de téléphone"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Votre société{" "}
                    </label>
                    <div class="mt-2.5 relative">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Entrez le nom de votre société"
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Message{" "}
                    </label>
                    <div class="mt-2.5 relative">
                      <textarea
                        name=""
                        id=""
                        placeholder=""
                        class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 border border-transparent rounded-md focus:outline-none hover:bg-indigo-700 focus:bg-indigo-400"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="w-full absolute bottom-0 h-14"
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
export default Form;
