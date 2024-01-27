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
import {useState} from "react";
import type {MouseEvent} from "react";
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

export default function Page() {
  // Style
  const buttonStyle = "bg-transparent text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-white rounded mr-2"
  
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
  })

  // Chart
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
    <div className="h-fit max-lg:w-fit lg:w-1/3 mx-auto">
      <h1 className="font-antihero text-5xl m-auto w-fit text-center mb-12">
        INSGESAMT WURDEN <br/> {year} SCHON <br/>
        <b><u className="text-[#ff0000]">{burpeeTotal != 0 ? burpeeTotal : "???" }</u></b> BURPEES <br/>
        GEMACHT
      </h1>
      <div>
        {yearArr.map(item => (
          <button key={item} className={buttonStyle} value={item} onClick={changeYear}> {item} </button>
        ))}
        <Line data={charData} options={charOptions} height="100%" width="100%"/>
      </div>
    </div>
    <div className="text-sm absolute right-10 bottom-5">
      <a href="https://github.com/Svenum/burpee-counter" target="_blank">GitHub</a>
    </div>
  </>
  );
};
