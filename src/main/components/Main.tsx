import React from "react"
import Sidebar from "./Sidebar"


export default function Main() {
    return (
        <div className="grid grid-cols-2 bg-[#1b1b1d] text-white">         
            <Sidebar />
            <div> content </div>
        </div>
    )
}