import React, { useState,useEffect } from "react";
import Button1509 from "../assets/Button 1509.png"
import Button1529 from "../assets/Button 1529.png"
import Button1530 from "../assets/Button 1530.png"
import squa from "../assets/Squares four 1.png"



function Overview () {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("http://localhost:3001/overview")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return ( 
        <div>
            <h1 className="flex gap-2 text-2xl font-bold mb-4"><img src={squa} alt="" />Overview</h1>
        <div className="flex gap-4 ">
            <div className="flex border rounded-lg p-4 w-auto bg-pink-100">
            <div className="pr-30" >
                <h3 className="font-bold mb-3"> Turnover</h3>
                <h1 className="text-3xl font-bold mb-3">${data.turnover}</h1>
                <p><span className="text-green-600"> {data.changeCustomer}$ </span>peiod of change</p>

            </div>
            <img src={Button1509}  className="w-[50px] h-[50px]"/>
            </div>
           
            <div className="flex border rounded-lg p-4 w-auto bg-blue-100">
            <div className="pr-30" >
                <h3 className="font-bold mb-3"> Turnover</h3>
                <h1 className="text-3xl font-bold mb-3">${data.profit}</h1>
                <p><span className="text-green-600"> {data.changeProfit}$ </span>peiod of change</p>

            </div>
            <img src={Button1529}  className="w-[50px] h-[50px]"/>
            </div>
           
            <div className="flex border rounded-lg p-4 w-auto bg-blue-100">
            <div className="pr-30" >
                <h3 className="font-bold mb-3"> Turnover</h3>
                <h1 className="text-3xl font-bold mb-3">${data.newCustomer}</h1>
                <p><span className="text-green-600"> {data.changeCustomer}$ </span>peiod of change</p>

            </div>
            <img src={Button1530}  className="w-[50px] h-[50px] "/>
            </div>
            </div>








        </div>
     );
}

export default Overview ;