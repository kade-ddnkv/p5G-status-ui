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
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div onClick={() => setActive(2)} style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
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
        <div style={{ minWidth: "36rem", maxWidth: "42rem", width: "30vw", paddingTop: "min(130%, 90vh)", marginRight: "2rem" }} className="h-min rounded-md bg-white relative overflow-y-auto">
          <div className="py-7 px-7 absolute top-0 left-0 w-full">
            <p className="font-bold text-lg">User Equipments</p>
            <p className="mt-3 text-sm text-gray-500">Some description of the purpose of this network component.</p>
            <div className="mt-7 flex flex-row space-x-28">
              <div className="flex flex-col space-y-1">
                <p className="text-gray-500">STATE</p>
                <div className="flex items-center space-x-2">
                  <span className="dot active"></span>
                  <p className="font-medium inline">Active</p>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-gray-500">SINCE</p>
                <p className="font-medium">35d ago</p>
              </div>
            </div>
            <div className="mt-9">
              <p className="text-gray-500">METRICS</p>
              <div className="flex flex-row space-x-28">
                <div>
                  <p className="font-light" style={{ fontSize: "3.5rem" }}>5</p>
                  <p className="-mt-3">active</p>
                </div>
                <div>
                  <p className="font-light" style={{ fontSize: "3.5rem" }}>231</p>
                  <p className="-mt-3">sum mbps</p>
                </div>
              </div>
            </div>
            <div className="mt-9 w-full">
              <p className="text-gray-500">Active User Equipments</p>
              <div className="px-2 mt-4 w-full">
                <table className="w-full">
                  <tr>
                    <td>UE #1</td>
                    <td className="text-gray-500">Active</td>
                    <td className="text-gray-500">10d ago</td>
                  </tr>
                  <tr>
                    <td>Western cowhouse</td>
                    <td className="text-gray-500">Active</td>
                    <td className="text-gray-500">10d ago</td>
                  </tr>
                  <tr>
                    <td>Northern cowhouse</td>
                    <td className="text-gray-500">Active</td>
                    <td className="text-gray-500">10d ago</td>
                  </tr>
                  {
                    [...Array(5)].map((e, i) => <tr>
                      <td>UE #{i + 2}</td>
                      <td className="text-gray-500">Active</td>
                      <td className="text-gray-500">10d ago</td>
                    </tr>)
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
    </div>
  )
}

function BaseStationActive({ setActive }: { setActive: any }) {
  return (
    <div className="flex flex-row items-center">
      <div>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "36rem", maxWidth: "42rem", width: "30vw", paddingTop: "min(130%, 90vh)", marginRight: "2rem", marginLeft: "2rem" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
        <div style={{ minWidth: "11rem", maxWidth: "13rem", width: "13vw", paddingTop: "120%" }} className="h-min rounded-md bg-white relative">
        </div>
      </div>
      <div style={{ marginLeft: "min(max(4vw, 3rem), 5rem)" }}>
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
    case 2:
      content = BaseStationActive;
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
