import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterUp(props) {
  const [counterState, setCounterState] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterState(true)}
      onExit={() => setCounterState(false)}
    >
      <div className="flex flex-col h-80 sm:flex-row justify-around items-center sm:h-36 bg-indigo-100">
        <div className="text-center">
          <p className="text-4xl text-teal-500 font-bold pb-2">
            {counterState && (
              <CountUp start={0} end={20} duration={3}></CountUp>
            )}
            +
          </p>
          <p className="text-indigo-800 font-semibold">Années d'expérience</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-500 font-bold pb-2">
            {counterState && (
              <CountUp start={0} end={2500} duration={2}></CountUp>
            )}
            +
          </p>
          <p className="text-indigo-800 font-semibold">Projets réalisés</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-500 font-bold pb-2">
            {counterState && (
              <CountUp start={0} end={1800} duration={2}></CountUp>
            )}
            +
          </p>
          <p className="text-indigo-800 font-semibold">Clients</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-teal-500 font-bold pb-2">
            {counterState && (
              <CountUp start={0} end={3000} duration={2}></CountUp>
            )}
            +
          </p>
          <p className="text-indigo-800 font-semibold">Campagnes</p>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default CounterUp;
