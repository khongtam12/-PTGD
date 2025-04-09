import React from "react";
import Bell from "../assets/Bell 1.png"
import avt313 from "../assets/Avatar 313.png"
import search from "../assets/Search.png"



function Header() {
    return (
        <div className=" flex justify-between items-center w-full ">
            <h2 className="text-4xl font-bold text-pink-600 !text-pink-600 !font-bold">Dashboard</h2>
            <div className="flex gap-4 pr-4">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="bg-gray-200 w-60 h-8 pl-10 pr-4 rounded-lg text-sm focus:outline-none"
                    />
                    <img
                        src={search}
                        alt="search"
                        className="w-4 h-4 absolute left-3 top-2"
                    />
                </div>                <img src={Bell} alt="" className="w-5 h-6" />
                <b className="text-1xl">?</b>
                <img src={avt313} className="w-7 h-7" />


            </div>
        </div>
    );
}

export default Header;