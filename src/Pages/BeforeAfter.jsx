

import m1 from "../utilities/majer/m1.jpg";
import m2 from "../utilities/majer/m2.jpg";
import m3 from "../utilities/majer/m3.jpg";
import m4 from "../utilities/majer/m4.jpg";
import m5 from "../utilities/majer/m5.jpg";
import m6 from "../utilities/majer/m6.jpg";
import m7 from "../utilities/majer/m7.jpg";
import m8 from "../utilities/majer/m8.jpg";
import m9 from "../utilities/majer/m9.jpg";


import React, { useState } from "react";
import BeforeAfterCard from "../components/BeforeAfterCard";
import { Md5G, Md60Fps, Md8K } from "react-icons/md";

function BeforeAfter() {
  const initalState = [
    { idx: 1, pos: 1, url: m1, active: true },
    { idx: 3, pos: 3, url: m2, active: true },
    { idx: 4, pos: 4, url: m3, active: true },
    { idx: 2, pos: 2, url: m4, active: true },
    { idx: 5, pos: 5, url: m5, active: true },
    { idx: 6, pos: 6, url: m6, active: true },
    { idx: 7, pos: 7, url: m7, active: true },
    { idx: 8, pos: 8, url: m8, active: true },
    { idx: 9, pos: 9, url: m9, active: false },
    
  ];

  const [cards, setCards] = useState(initalState);

  const handleLeftClick = (isLeft) => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };


  return (
    <div className="flex w-full h-full bg-customdarkblack">

      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </div>

      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <BeforeAfterCard key={index} prop={card.url} />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
      >
        {">"}
      </div>
    </div>
  );
}

export default BeforeAfter;
