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
  const headerStyle = "max-lg:text-2xl lg:text-4xl text-[#ff0000] m-auto mb-12 font-antihero text-center";
  const pageStyle = (givenPageId:number) => {
    const defaultStyle = "absolute w-full h-full p-10 top-0 overflow-auto lg:text-xl";
    if (givenPageId != pageId) {
      return defaultStyle + " hidden";
    } else {
      return defaultStyle;
    }
  };
  const pageNumberStyle = "absolute bottom-0 right-0 mr-10 mb-7"
 
  // Page handling
  const maxPageId = workouts.length - 1;
  const [pageId, setPageId] = useState(0);
  const pageIdPlus = () => {
    if (pageId + 1 <= maxPageId + 2) {
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
        <div className="mt-10 m-auto border-solid border-2 border-white h-[80vh] lg:w-1/3 max-w-[80vw] relative">
          <div className="relative top-0 w-1/2 h-full left-0 z-10" onClick={pageIdMinus}/>
          <div className="relative bottom-full w-1/2 h-full left-1/2 z-10" onClick={pageIdPlus}/>
          <div id="0" className={pageStyle(0)}>
            <h1 className={headerStyle + " lg:pt-80 max-lg:pt-52"}>Das Scharzes Buch</h1>
            <p className="m-auto w-full text-center mt-5 lg:text-2xl font-antihero">
              Burpees? JA bitte!!!
            </p>
          </div>
          <div id="1" className={pageStyle(1)}>
            <h1 className={headerStyle}>Inhaltsverzeichnis</h1>
            {
              workouts.map((item:Workouts, index:number) => (
                <div className="w-100 block flex" key={index}>
                  <div className="inline-block flex-none">{item.name}</div>
                  <div className="inline-block -translate-y-1.1.55 border-b-2 border-b-white border-dotted flex-auto"></div>
                  <div className="inline-block flex-none">{index + 2}</div>
                </div>
              ))
            }
            <div className={pageNumberStyle}>1</div>
          </div>
          {
            workouts.map((item:Workouts, index:number) => (
              <div key={item.name} id={((index + 2) as unknown) as string} className={pageStyle(index + 2)}>
                <h1 className={headerStyle} id={item.name}>{item.name}</h1>
                <pre>{item.description}</pre>
                <div className={pageNumberStyle}>{index + 2}</div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
