"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
  ArcElement
} from "chart.js";
import {useState} from "react";
import type {MouseEvent} from "react";
import { Line, Doughnut } from "react-chartjs-2";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement
);

export default function Page() {
  // Style
  const buttonStyle = "bg-transparent text-whtie font-semibold hover:text-main py-2 px-4 border border-white hover:border-main rounded mr-2"
  const buttonStyleSelected = "bg-transparent text-main font-semibold py-2 px-4 border border-main rounded mr-2"
  
  // Year
  const [year, setYear] = useState(new Date().getFullYear());
  const yearArr = [];
  for (let yearCounter = 2022; yearCounter <= new Date().getFullYear(); yearCounter++){
    yearArr.push(yearCounter);
  }

  const changeYear = (event:MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    setYear(Number(target.value));
  };

  const yearButton = yearArr.map(item => (
    <button key={item} className={year != item ? buttonStyle : buttonStyleSelected} value={item} onClick={changeYear}> {item} </button>
  ))
  // Burpees
  const burpees = require('../src/data/' + year + '/burpees.json');
  let burpeeDates:string[] = [];
  let burpeeNums:number[] = [];
  let burpeeNumsTotal:number[] = [];
  let burpeeTotal:number = 0;
  
  burpees.forEach((burpee:any) => {
    burpeeDates.push(burpee.date);
    burpeeNumsTotal.push(burpeeTotal + burpee.num);
    burpeeNums.push(burpee.num);
    burpeeTotal += burpee.num;
  });


  // Workouts
  const workouts = require("../src/data/" + year + "/workouts.json");
  const workoutKinds = Object.keys(workouts);
  let workoutKindsNum:number[] = [];

  workoutKinds.forEach((kind:string) => {
    workoutKindsNum.push(workouts[kind].length);
  });

  // Chart
  const burpeeCharData = {
    labels: burpeeDates,
    datasets: [
      {
        data: burpeeNumsTotal,
        backgroundColor: "rgb(5, 5, 5)",
        borderColor: "#f6be00",
        label: "gesamt",
      },
      {
        data: burpeeNums,
        backgroundColor: "rgb(5, 5, 5)",
        borderColor: "white",
        label: "pro Tag",
        }
    ],
  };
  const workoutsCharData = {
    labels: workoutKinds,
    datasets: [
      {
        label: "",
        data: workoutKindsNum,
        backgroundColor: [
          "#f6be00",
          "#fbbb29",
          "#ffb83d",
          "#ffb54e",
          "#ffb45d",
          "#ffb36b",
          "#ffb278",
          "#f19c68",
          "#e28658",
          "#d4704b",
          "#c55a3e",
          "#b54334",
          "#a52a2a"
        ],
        borderColor: [
          "rgb(5, 5, 5)"
        ],
        borderWidth: 4 
      }
    ]
  };
  // Chart config
  ChartJS.defaults.font.size = 15;
  ChartJS.defaults.borderColor = "black";

  return (
  <>
    <div className="h-fit max-lg:w-fit lg:w-1/3 mx-auto">
      <h1 className="font-antihero text-5xl m-auto w-fit text-center mb-12">
        INSGESAMT WURDEN <br/> {year} SCHON <br/>
        <b><u className="text-main">{burpeeTotal != 0 ? burpeeTotal : "???" }</u></b> BURPEES <br/>
        GEMACHT
      </h1>
      <div>
        {yearButton}
        <Line className="mb-12" data={burpeeCharData} height="100%" width="100%"/>
        {yearButton}
        <Doughnut data={workoutsCharData}/>
      </div>
    </div>
    <div className="text-sm absolute right-10 bottom-5">
      <a href="https://github.com/Svenum/burpee-counter" target="_blank">GitHub</a>
    </div>
  </>
  );
};
