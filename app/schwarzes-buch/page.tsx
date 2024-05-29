"use client"
import React from "react";
import { useState } from "react";
import type {MouseEvent} from "react";

type Workouts = {
  name: string,
  description: string,
  exercises: string[]
}

export default function Page() {
  const workouts = require("../../src/data/black_book.json");

  // Style
  const headerStyle = "text-2xl lg:text-4xl text-[#ff0000] m-auto mb-12 font-antihero text-center";
  const pageStyle = (givenPageId:number) => {
    const defaultStyle = "absolute w-full h-fit min-h-full p-5 lg:p-10 top-50 overflow-auto text-s lg:text-xl";
    if (givenPageId != pageId) {
      return defaultStyle + " hidden";
    } else {
      return defaultStyle;
    }
  };
  const contentStyle = "mt-[95px]"
  const pageNumberStyle = "absolute bottom-0 right-0 mr-10 mb-7";
  const backButtonStyle = "absolute bottom-0 left-0 ml-10 mb-7";
 
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
  const setPageIdTo = (event:MouseEvent) => {
    const target = event.target as HTMLButtonElement; 
    setPageId(Number(target.value));
  };

  return(
    <>
      <div className="">
        <div className="mt-10 m-auto border-solid border-2 border-white h-[80vh] lg:w-1/3 max-w-[80vw] relative overflow-auto">
          <div className={(pageId != 0 ? "opacity-0 backdrop-blur-md " : "opacity-20") + " hover:opacity-100 border-2 border-dashed relative float-left w-1/2 h-1/6 max-h-[150px] z-10 flex items-center"} onClick={pageIdMinus}><p className="w-full text-center text-5xl">&#10554;</p></div>
          <div className={(pageId != 0 ? "opacity-0 backdrop-blur-md " : "opacity-20") + " hover:opacity-100 border-2 border-dashed relative float-right w-1/2 h-1/6 max-h-[150px] z-10 flex items-center scale-x-[-1]"} onClick={pageIdPlus}><p className="w-full text-center text-5xl">&#10554;</p></div>
          <div id="0" className={pageStyle(0)}>
            <h1 className={"lg:pt-80 pt-52 lg:text-4xl text-2xl " + headerStyle}>Das Scharzes Buch</h1>
              <p className="m-auto w-full text-center mt-5 text-l lg:text-2xl font-antihero">
              Burpees? JA bitte!!!
            </p>
          </div>
          <div id="1" className={pageStyle(1)}>
            <h1 className={"text-xl lg:text-4xl " + headerStyle}>Inhaltsverzeichnis</h1>
            <div className={contentStyle}>
              {
                workouts.map((item:Workouts, index:number) => (
                  <button key={index} className="w-full h-fit" onClick={setPageIdTo} value={index + 2}>
                    <div className="w-100 block flex relative pointer-events-none">
                      <div className="inline-block flex-none">{item.name}</div>
                      <div className="inline-block -translate-y-1.1.55 border-b-2 border-b-white border-dotted flex-auto"></div>
                      <div className="inline-block flex-none">{index + 2}</div>
                    </div>
                  </button>
                ))
              }
            </div>
            <div className={pageNumberStyle}>1</div>
          </div>
          {
            workouts.map((item:Workouts, index:number) => (
              <div key={item.name} id={((index + 2) as unknown) as string} className={pageStyle(index + 2)}>
                <h1 className={headerStyle} id={item.name}>{item.name}</h1>
                <div className={contentStyle}>
                  <p>{item.description}</p>
                  <ul className="list-outside list-disc ml-5">
                    {item.exercises.map((exerciese:string) =>(
                      <li key={exerciese}>{exerciese}</li>
                    ))}
                  </ul>
                  <div className={pageNumberStyle}>{index + 2}</div>
                  <button className={backButtonStyle} onClick={setPageIdTo} value="1"> Zurück </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
