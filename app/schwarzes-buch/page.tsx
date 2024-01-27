import React from "react";

type Workouts = {
  name: string,
  description: string
}

export default function Page() {
  const workouts = require("../../src/data/black_book.json");

  console.log(workouts)
  return(
    <>
      <div className="h-fit max-lg:w-fit lg:w-1/3 mx-auto">
        <h1 className="text-4xl text-[#ff0000]">Diese Seite ist noch in Arbiet!!!</h1>
        <table className="m-10">
          <tr>
            <th>Workout</th>
            <th>Beschreibung</th>
          </tr>
          {
            workouts.map((item:Workouts) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td><pre>{item.description}</pre></td>
              </tr>
            ))
          }
        </table>
      </div>
    </>
  )
}
