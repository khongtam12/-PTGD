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
useEffect(() => {
    const handleClick = (e) => {
        const editBtn = e.target.closest('.edit-btn');
        if (editBtn) {
            const id = editBtn.getAttribute('data-id');
            const user = data.find(u => u.id.toString() === id.toString());
            console.log(user)

            if (user) {
                setSelect(user);
                setFormData(user);
                openModal();
            }
        }
    };

   
    document.addEventListener('click', handleClick);

    
    return () => {
        document.removeEventListener('click', handleClick);
    };
}, [data]);

  

    const handleSave = (e) => {
        e.preventDefault();
        if (select) {
            
            fetch(`http://localhost:3001/orders/${select.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(res => res.json())
                .then(updated => {
                    item.id.toString() === updated.id.toString() ? updated : item
                    setData(updatedList);
                    closeModal();
                })
                .catch(err => console.error("Update error:", err));
        } 
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const columns = [
        {
            title: '<input type="checkbox" class="header-checkbox" />',
            data: null,
            orderable: false,
            className: 'h-10 w-10',
            render: () => `
                <input type="checkbox" class="row-checkbox" />
            `
        },
        { title: 'CUSTOMER NAME', data: 'customerName', className: 'h-10' },
        { title: 'COMPANY', data: 'company', className: 'h-10' },
        { title: 'ORDER DATE', data: 'orderDate', className: 'h-10' },
        {
            title: 'STATUS',
            data: 'status',
            className: 'h-10',
            render: (data) => {
                let statusClass = '';
                switch (data) {
                    case 'Completed':
                        statusClass = 'bg-green-100 text-green-700';
                        break;
                    case 'New':
                        statusClass = 'bg-blue-100 text-blue-700';
                        break;
                    case 'In Progress':
                        statusClass = 'bg-yellow-100 text-yellow-700';
                        break;
                    case 'Canceled':
                        statusClass = 'bg-red-100 text-red-700';
                        break;
                    default:
                        statusClass = 'bg-gray-100 text-gray-500';
                        break;
                }
                return `<span class="${statusClass} rounded-lg p-1">${data}</span>`;
            }
        },
        { title: 'TOTAL AMOUNT', data: 'totalAmount', className: 'h-10' },
        {
            title: '',
            data: null,
            orderable: false,
            className: 'h-10 w-10',
            render: (data, type, row) =>
                `<img src="${create}" alt="edit" style="width: 20px; cursor: pointer;" class="edit-btn" data-id="${row.id}" />`
        }
        
    ];

    return (
        <div>
            <div className="flex justify-between mb-2 mt-8 items-center">
                <h1 className="flex gap-2 font-bold rounded-lg">
                    <img src={file} alt="" className="w-12 h-12" />Detailed report
                </h1>
                <div className="flex gap-4 items-center">
                    <button className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2">
                        <img src={Download} alt="" className="w-5 h-5" /> Import
                    </button>
                    <button className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2">
                        <img src={moveup} alt="" className="w-5 h-5" /> Export
                    </button>
                    <button
                        className="flex gap-2 items-center border border-pink-400 text-pink-400 rounded-lg px-3 py-2"
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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: '400px'
                    }
                }}
                contentLabel="Edit or Add User"
            >
                <form onSubmit={handleSave}>
                    <div className="mb-2">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label>Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label>Order Date</label>
                        <input
                            type="date"
                            name="orderDate"
                            value={formData.orderDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label>Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="form-control"
                        >
                            <option>New</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Canceled</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label>Total Amount</label>
                        <input
                            type="number"
                            name="totalAmount"
                            value={formData.totalAmount}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="flex justify-end mt-3 gap-2">
                        <button type="button" onClick={closeModal} className="btn btn-secondary">Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default DetailedReport;
