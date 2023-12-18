'use client'

import { useState } from 'react'

function NoActive({ setActive }: { setActive: any }) {
  return (
    <div className="flex flex-row space-x-20">
      <div onClick={() => setActive(1)} className="h-60 w-52 rounded-md bg-white relative">
      </div>
      <div className="xl:h-60 xl:w-52 sm:h-52 sm:w-44 rounded-md bg-white relative">
      </div>
      <div className="h-60 w-52 rounded-md bg-white relative">
      </div>
      <div className="h-60 w-52 rounded-md bg-white relative">
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
