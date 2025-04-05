import React from "react";
import Bell from "../assets/Bell 1.png"
import avt313 from "../assets/Avatar 313.png"



function Header() {
    return (  
        <div className=" flex justify-between items-center w-full ">
            <h2 className="text-4xl font-bold text-pink-600">Dashboard</h2>
            <div className="flex gap-4 pr-4">
                <input type="search" placeholder="Search..." className=" bg-gray-200 w-60 h-7 pl-4 rounded-lg" />
                <img src={Bell} alt="" className="w-5 h-6"/>
                <b className="text-1xl">?</b>
                <img src={avt313} className="w-7 h-7" />

                
            </div>
        </div>
    );
}

export default Header ;