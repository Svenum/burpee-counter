"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
import style from "./style.module.css";
import { useState } from "react";

export default function Page() {
  const buttonStyle = "bg-transparent text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-white rounded mr-2"
  const buttonStyleSelected = "bg-transparent text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-white rounded mr-2"
  
  const [button2022, setButton2022] = useState(buttonStyle);
  const [button2023, setButton2023] = useState(buttonStyle);
  const [button2024, setButton2024] = useState(buttonStyle);

  const year = "2024";
  const data = require('../src/data.json');
  let burpeeDates:string[] = [];
  let burpeeNums:number[] = [];
  let burpeeNumsTotal:number[] = [];
  let burpeeTotal:number = 0;
  
  data.burpees[year].forEach((burpee:any) => {
    burpeeDates.push(burpee.date);
    burpeeNumsTotal.push(burpeeTotal + burpee.num);
    burpeeNums.push(burpee.num);
    burpeeTotal += burpee.num;
  })

  const charData = {
            labels: burpeeDates,
            datasets: [
              {
                data: burpeeNumsTotal,
                backgroundColor: "red", 
                borderColor: "red",
                label: "gesamt",
              },
              {
                data: burpeeNums,
                backgroundColor: "white", 
                borderColor: "white",
                label: "pro Tag",
              },
            ],
          };
  const charOptions = {
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 10 
                  }
                }
              }
            }
        }
  // Chart config
  ChartJS.defaults.font.size = 15;

  return (
  <>
    <div className={style.container}>
      <h1 className={style.header}>
        INSGESAMT WURDEN SCHON <br/>
        <b><u>{burpeeTotal}</u></b> BURPEES <br/>
        GEMACHT
      </h1>
      <div>
        <button class={button2022} onClick={setButton2022(buttonStyleSelected)} > 2022 </button>
        <button class={button2023} onClick={setButton2023(buttonStyleSelected)} > 2023 </button>
        <button class={button2024} onClick={setButton2024(buttonStyleSelected)} > 2024 </button>
        <Line data={charData} options={charOptions} height="60%" width="60%"/>
      </div>
    </div>
    <div className={style.giturl}>
      <a href="https://github.com/Svenum/burpee-counter" target="_blank">GitHub</a>
    </div>
  </>
  );
};
