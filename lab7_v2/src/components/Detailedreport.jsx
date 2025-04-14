import React, { useEffect, useState } from "react";
import DataTable from 'datatables.net-react';
import './Detail.css';
import DT from 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import file from "../assets/File text 1.png";
import create from "../assets/create.png"
import moveup from "../assets/Move up.png"
import Download from "../assets/Download.png"
import Modal from 'react-modal';

DataTable.use(DT);

Modal.setAppElement('#root'); 

function DetailedReport() {
    const [data, setData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        company: '',
        orderDate: '',
        status: 'New',
        totalAmount: ''
    });
    const [select, setSelect] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/orders")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    
      function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelect(null);
        setFormData({
            customerName: '',
            company: '',
            orderDate: '',
            status: 'New',
            totalAmount: ''
        });
    }


   

    const columns = [
        {
            title: '<input type="checkbox" class="header-checkbox" />',
            
        },
        {
            title: 'CUSTOMER NAME',
           
        },
        
        { title: 'COMPANY',  className: 'h-10' },
        { title: 'ORDER DATE', className: 'h-10' },
        {
            title: 'STATUS',
            
        },
        { title: 'TOTAL AMOUNT',  className: 'h-10' },
        {
            title: '',
            }
        
    ];

    return (
        <div>
            <div className="flex justify-between mb-2 mt-8 items-center">
                <h3 className="flex gap-2 font-bold rounded-lg items-center !font-bold">
                    <img src={file} alt="" className="w-12 h-12" />Detailed report
                </h3>
                <div className="flex gap-4 items-center">
                    <button   className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2 !border-pink-400 !text-pink-400 !rounded-lg"
                    >
                        <img src={Download} alt="" className="w-5 h-5" /> Import
                    </button>
                    <button   className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2 !border-pink-400 !text-pink-400 !rounded-lg"
                    >
                        <img src={moveup} alt="" className="w-5 h-5" /> Export
                    </button>
                    <button
                         className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2 !border-pink-400 !text-pink-400 !rounded-lg"
 
                        onClick={openModal}
                    >
                        Add
                    </button>
                </div>
            </div>

            <DataTable
                className="min-w-full text-sm text-gray-700 text-center border border-gray-200 rounded-lg h-20"
                data={data}
                columns={columns}
                options={{
                    paging: true,
                    searching: false,
                    ordering: true,
                    info: true,
                    lengthMenu: [6],
                    lengthChange: false,
                    pagingType: "full_numbers",
                    dom: 'Bfrtip',
                    renderer: "bootstrap",
                    language: {
                        info: "_TOTAL_ result"
                    }
                }}
            />

          
        </div>
    );
}

export default DetailedReport;
