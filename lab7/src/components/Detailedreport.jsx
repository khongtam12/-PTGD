import React, { useEffect, useState } from "react";
import DataTable from 'datatables.net-react';
import './Detail.css';
import DT from 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import file from "../assets/File text 1.png";

DataTable.use(DT);

function DetailedReport() {
    const [data, setData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]); 

   
    useEffect(() => {
        fetch("http://localhost:3001/orders")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    
    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setSelectedRows((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedRows((prevSelected) => prevSelected.filter(item => item !== id));
        }
    };

    const columns = [
        {
            title: '',
            data: null, 
            className: 'h-10  w-10',
            orderable: false, 
            render: (data, type, row) => {
                
                return `
          <input
            type="checkbox"
            class="row-checkbox"
            data-id="${row.id}"
            ${selectedRows.includes(row.id) ? 'checked' : ''}
          />
        `;
            }
        },
        { title: 'CUSTOMER NAME', data: 'customerName', className: 'h-10' },
        { title: 'COMPANY', data: 'company', className: 'h-10' },
        { title: 'ORDER DATE', data: 'orderDate', className: 'h-10' },
        {
            title: 'STATUS',
            data: 'status',
            className: 'h-10',
            render: (data) => {
                if (typeof data === 'object') {
                    data = data && data.status ? data.status : '';
                }
                let statusClass = '';
                switch (data) {
                    case 'Completed':
                        statusClass = 'bg-green-100 text-green-700 rounded-lg p-1';
                        break;
                    case 'New':
                        statusClass = 'bg-blue-100 text-blue-700 rounded-lg p-1';
                        break;
                    case 'In Progress':
                        statusClass = 'bg-yellow-100 text-yellow-700 rounded-lg p-1';
                        break;
                    case 'Canceled':
                        statusClass = 'bg-red-100 text-red-700 rounded-lg p-1';
                        break;
                    default:
                        statusClass = 'bg-gray-100 text-gray-500 rounded-lg p-1';
                        break;
                }
                return `<span class="${statusClass}">${data}</span>`;
            }
        },
        { title: 'Total Amount', data: 'totalAmount', className: 'h-10' }
    ];

    useEffect(() => {
        const handleCheckboxClick = (e) => {
            const checkbox = e.target;
            if (checkbox.classList.contains('row-checkbox')) {
                const id = parseInt(checkbox.getAttribute('data-id'), 10);
                handleCheckboxChange({ target: { checked: checkbox.checked } }, id);
            }
        };

        const table = document.querySelector('.dataTable');
        if (table) {
            table.addEventListener('click', handleCheckboxClick);
        }

        return () => {
            if (table) {
                table.removeEventListener('click', handleCheckboxClick);
            }
        };
    }, [data, selectedRows]);

    return (
        <div>
            <h1 className="flex gap-2  font-bold mb-4 mt-8 rounded-lg">
                <img src={file} alt="" />Detailed report
            </h1>

            <DataTable
                className="min-w-full text-sm text-gray-700 text-center border border-gray-200 rounded-lg h-20"
                data={data}
                columns={columns}
                options={{
                    paging: true,
                    searching: false,
                    ordering: true,
                    info: true,
                    lengthMenu: [5],
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