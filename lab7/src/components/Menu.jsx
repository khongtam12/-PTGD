import React from "react";
import logo from "../assets/Image 1858.png";
import squa from "../assets/Squares four 1.png";
import folder from "../assets/Folder.png";
import Groups from "../assets/Groups.png";
import Pie from "../assets/Pie chart.png";
import Chat from "../assets/Chat.png";
import Group from "../assets/Group.png";
import code from "../assets/Code.png"
import { NavLink } from "react-router-dom";

function Menu() {
    const navItems = [
        { path: "/", label: "Dashboard", icon: squa },
        { path: "/projects", label: "Projects", icon: folder },
        { path: "/teams", label: "Teams", icon: Groups },
        { path: "/analytics", label: "Analytics", icon: Pie },
        { path: "/messages", label: "Messages", icon: Chat },
        { path: "/integrations", label: "Integrations", icon: code },
    ];

    return (
        <div className="flex flex-col  pt-2 w-full items-center">
            <img src={logo} alt="Logo" className="mb-6 w-[100px]" />
            <ul className="flex flex-col gap-2 w-full">
                {navItems.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.label}
                        style={{ textDecoration: 'none' }}
                        className={({ isActive }) =>
                            `flex items-center gap-2  py-2 px-2 items-start w-full px-1  rounded-lg   ${isActive ? "bg-pink-500 text-white" : "text-black "
                            }`
                        }
                    >
                        <img src={item.icon} className="w-6 h-6" />
                        <span className="text-lg ">{item.label}</span>
                    </NavLink>
                ))}
            </ul>

            <div className="mt-20 text-center bg-blue-100 h-[300px] items-center w-[200px] p-4 rounded-lg justify-center flex flex-col">
                <img src={Group} alt="update" className="mx-auto" />
                <h2 className="font-bold mb-2">V2.0 is available</h2>
                <button className="text-blue-300 border rounded-lg w-45 h-8 bg-white !rounded-lg !text-blue-300 !border-blue-300">Try now</button>
            </div>
        </div>
    );
}

export default Menu;
