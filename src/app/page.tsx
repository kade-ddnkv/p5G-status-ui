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
    <div className="flex flex-row items-center">
      <div>
        <div style={{ minWidth: "36rem", maxWidth: "42rem", width: "30vw", paddingTop: "min(130%, 90vh)" }} className="h-min rounded-md bg-white relative">
          <div className="py-7 px-7 absolute top-0 left-0">
            <p className="font-bold text-lg">User Equipments</p>
            <p className="mt-2 text-sm text-gray-500">Some description of the purpose of this network component.</p>
          </div>
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
    <main onClick={() => { if (active != 0) { setActive(0) } }} className="flex min-h-screen flex-col items-center justify-between px-24 py-8 overflow-hidden">
      <p></p>
      {content({ setActive })}
      <p></p>
    </main>
  )
}
