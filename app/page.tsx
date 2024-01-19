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
import { ReactDOM } from "react";

const MyLineChart = () => {
  const data = require('../src/data.json');
  let burpeeDates:string[] = [];
  let burpeeNums:number[] = [];
  let burpeeNumsTotal:number[] = [];
  let burpeeTotal:number = 0;
  
  data.burpees.forEach((burpee:any) => {
    burpeeDates.push(burpee.date);
    burpeeNumsTotal.push(burpeeTotal + burpee.num);
    burpeeNums.push(burpee.num);
    burpeeTotal += burpee.num;
  })

  return (
  <>
    <div className={style.container}>
      <h1 className={style.header}>
        INSGESAMT WURDEN SCHON <br/>
        <b><u>{burpeeTotal}</u></b> BURPEES <br/>
        GEMACHT
      </h1>
      <div>
        <Line
          data={{
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
          }}
          height="20%"
          width="60%"
        />
      </div>
    </div>
    <div className={style.giturl}>
      <a href="https://github.com/Svenum/burpee-counter" target="_blank">GitHub</a>
    </div>
  </>
  );
};
export default MyLineChart;
