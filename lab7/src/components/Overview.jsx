import React, { useState, useEffect } from "react";
import Button1509 from "../assets/Button 1509.png"
import Button1529 from "../assets/Button 1529.png"
import Button1530 from "../assets/Button 1530.png"
import squa from "../assets/Squares four 1.png"



function Overview() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/overview")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div>
            <h3 className="flex gap-2  font-bold mb-4"><img src={squa} alt="" />Overview</h3>
            <div className="flex gap-4 ">
                <div className="flex border rounded-lg p-4 w-[350px] h-[180px] bg-pink-100">
                    <div className="pr-20" >
                        <h5 className="font-bold mb-2"> Turnover</h5>
                        <h1 className="text-3xl font-bold mb-3">${data.turnover}</h1>
                        <p><span className="text-green-600"> {data.changeCustomer}$ </span>period of change</p>

                    </div>
                    <img src={Button1509} className="w-[50px] h-[50px]" />
                </div>

                <div className="flex border rounded-lg p-4 w-[350px] h-[180px] bg-blue-100">
                    <div className="pr-20" >
                        <h5 className="font-bold mb-3"> Profit</h5>
                        <h1 className="text-3xl font-bold mb-3">${data.profit}</h1>
                        <p><span className="text-green-600"> {data.changeProfit}$ </span>period of change</p>

                    </div>
                    <img src={Button1529} className="w-[50px] h-[50px]" />
                </div>

                <div className="flex border rounded-lg p-4 w-[350px] h-[180px] bg-blue-100">
                    <div className="pr-20" >
                        <h5 className="font-bold mb-3"> New customer</h5>
                        <h1 className="text-3xl font-bold mb-3">${data.newCustomer}</h1>
                        <p><span className="text-green-600"> {data.changeCustomer}$ </span>period of change</p>

                    </div>
                    <img src={Button1530} className="w-[50px] h-[50px] " />
                </div>
            </div>








        </div>
    );
}

export default Overview;