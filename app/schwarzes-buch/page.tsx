import React from "react";

type Workouts = {
  name: string,
  description: string
}

export default function Page() {
  const workouts = require("../../src/data/black_book.json");

  // Style
  const cellStyle = "border-solid border-white border-2 p-4 text-xl";

  console.log(workouts)
  return(
    <>
      <div className="h-fit max-lg:w-fit lg:w-1/3 mx-auto">
        <h1 className="text-4xl text-[#ff0000] m-auto font-antihero text-center">Scharzes Buch</h1>
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
