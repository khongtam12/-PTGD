import React from "react";
import logo from "../assets/Image 1858.png"
import squa from "../assets/Squares four 1.png"
import folder from "../assets/Folder.png"
import Groups from "../assets/Groups.png"
import Pie  from "../assets/Pie chart.png"
import Chat  from "../assets/Chat.png"
import Group from "../assets/Group.png"

function Menu() {
    return ( 
        <div className="flex flex-col pl-5 pt-2 ">
        <img src={logo} alt="Logo" className="mb-6 w-[100px]" />
        <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 bg-pink-500 rounded-lg text-white">
                <img src={squa} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Dashboard</span>
            </li>
            <li className="flex items-center gap-2">
                <img src={folder} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Projects</span>
            </li>
            <li className="flex items-center gap-2">
                <img src={Groups} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Teams</span>
            </li>
            <li className="flex items-center gap-2">
                <img src={Pie} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Analytics</span>
            </li>
            <li className="flex items-center gap-2">
                <img src={Chat} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Messages</span>
            </li>
            <li className="flex items-center gap-2">
                <img src={Chat} alt="Dashboard Icon" className="w-6 h-6" />
                <span className="text-lg">Integrations</span>
            </li>
        </ul>
        <div className="mt-20 text-center bg-blue-100 h-[300px] items-center w-[200px] p-4 rounded-lg justify-center flex flex-col
        ">
    <img src={Group} alt="" className="mx-auto"/>
    <h2 className="font-bold mb-2">V2.0 is available</h2>
    <button className="text-blue-300 border rounded-lg w-45 h-8 bg-white">Try now</button>
</div>

    </div>
     );
}

export default Menu;
