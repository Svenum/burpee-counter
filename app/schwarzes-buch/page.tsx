"use client"
import React from "react";
import { useState } from "react";

type Workouts = {
  name: string,
  description: string
}

export default function Page() {
  const workouts = require("../../src/data/black_book.json");

  // Style
  const cellStyle = "border-solid border-white border-2 p-4 text-xl";
  
  // Page handling
  const maxPageId = workouts.length - 1;
  const [pageId, setPageId] = useState(0);
  const pageIdPlus = () => {
    if (pageId + 1 <= maxPageId) {
      setPageId(pageId + 1);
    };
  };
  const pageIdMinus = () => {
    if (pageId - 1 >= 0) {
      setPageId(pageId - 1);
    };
  };



  console.log(workouts)
  return(
    <>
      <div className="">
        <h1 className="text-4xl text-[#ff0000] m-auto font-antihero text-center">Scharzes Buch</h1>

        <div className="mt-10 m-auto border-solid border-2 border-white h-[80vh] lg:w-1/3 max-w-[80vw] relative">
          <div className="relative top-0 w-1/2 h-full left-0 z-10" onClick={pageIdMinus}/>
          <div className="relative bottom-full w-1/2 h-full left-1/2 z-10" onClick={pageIdPlus}/>
          {
            workouts.map((item:Workouts, index:number) => (
              <div key={item.name} id={index} className={`${pageId != index ? "hidden" : ""} absolute w-full p-5 top-0 overflow-auto`}>
                <h1 className="text-[#ff0000] text-center text-2xl underline mb-5" id={item.name}>{item.name}</h1>
                <pre>{item.description}</pre>
              </div>
            ))
          }
        </div>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <table className="m-auto mt-10">
          <tr>
            <th className={cellStyle}>Workout</th>
            <th className={cellStyle}>Beschreibung</th>
          </tr>
          {
            workouts.map((item:Workouts) => (
              <tr key={item.name}>
                <td className={cellStyle + " text-[#ff0000] text-center"} id={item.name}><b>{item.name}</b></td>
                <td className={cellStyle}><pre>{item.description}</pre></td>
              </tr>
            ))
          }
        </table>
      </div>
    </>
  )
}
