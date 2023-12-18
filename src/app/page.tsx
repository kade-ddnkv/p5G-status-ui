'use client'

import { useState } from 'react'

// function Block() {
//   return (
    
//   )
// }

function NoActive({ setActive }: { setActive: any }) {
  return (
    <div className="flex flex-row">
      <div>
        <div onClick={() => setActive(1)} style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{marginLeft: "min(max(4vw, 3rem), 5rem)"}}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{marginLeft: "min(max(4vw, 3rem), 5rem)"}}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{marginLeft: "min(max(4vw, 3rem), 5rem)"}}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
    </div>
  )
}

function UserEquipmentActive({ setActive }: { setActive: any }) {
  return (
    <div className="flex flex-row space-x-20 items-center">
      <div style={{ minHeight: "48rem", minWidth: "36rem" }} className="w-52 rounded-md bg-white relative">
      </div>
      <div className="h-60 w-52 rounded-md bg-white relative">
      </div>
      <div className="h-60 w-52 rounded-md bg-white relative">
      </div>
      <div className="h-60 w-52 rounded-md bg-white relative">
      </div>
    </div>
  )
}

export default function Home() {

  const [active, setActive] = useState<number>(0)

  let content;

  switch (active) {
    case 0:
      content = NoActive;
      break;
    case 1:
      content = UserEquipmentActive;
      break;
    default:
      throw new Error();
  }

  return (
    <main onClick={() => { if (active != 0) { setActive(0) } }} className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <p></p>
      {content({ setActive })}
      <p></p>
    </main>
  )
}
