"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
import style from "./style.module.css";
import { ReactDOM } from "react";

const MyLineChart = () => {
  const data = require('../src/data.json');
  let burpeeDates:string[] = [];
  let burpeeNums:number[] = [];
  let burpeeTotal:number = 0;
  
  data.burpees.forEach((burpee:any) => {
    burpeeDates.push(burpee.date);
    burpeeNums.push(burpeeTotal + burpee.num);
    burpeeTotal += burpee.num;
  })

  return (
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
              data: burpeeNums,
              backgroundColor: "white", 
              borderColor: "white",
            },
          ],
        }}
        height="20%"
        width="60%"
      />
    </div>
  </div>
  );
};
export default MyLineChart;
