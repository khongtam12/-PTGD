import React from "react";
import moveup from "../assets/Move up.png"
import Download from "../assets/Download.png"
import file from "../assets/File text 1.png";
import Content from '../components/Content'
export default function Project(){
    return(
    
 

  <div className="content">
     <div className="flex justify-between mb-2 mt-8 items-center">
                                <h3 className="flex gap-2  font-bold  rounded-lg">
                                    <img src={file} alt="" className="w-12 h-12" />Detailed report
                                </h3>
                                <div className="flex gap-4 items-center">
                                    <button className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2 ">
                                        <img src={Download} alt="" className="w-5 h-5" /> Import
                                    </button>
                                    <button className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2 ">
                                        <img src={moveup} alt="" className="w-5 h-5" /> Export
                                    </button> </div>
                            </div>
    <h1>Project</h1>


 
</div>
    )
}