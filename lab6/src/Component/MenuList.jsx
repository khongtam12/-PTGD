import 'bootstrap/dist/css/bootstrap.min.css';
import Salad from "../assets/Lotus delight salad.png"
import './MenuList.css'
import { useEffect, useState } from 'react';
import { Form, Navigate, useNavigate } from 'react-router-dom';
import { Modal } from 'bootstrap';


export default function MenuList(){
    const [select,setSelect] =useState(null)
    const [list,setList] =useState([]);
    const navigate = useNavigate();
    const data=[
        
            {"id":1,"name":"Phở","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":2,"name":"Mì","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":3,"name":"Cơm","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":4,"name":"Cháo","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":5,"name":"Phở","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":6,"name":"Mì","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":7,"name":"Cơm","price":50000,"descreption":"Ngon bổ rẻ","img":Salad},
            {"id":8,"name":"Cháo","price":50000,"descreption":"Ngon bổ rẻ","img":Salad}
        
    ]
//  function OpenForm(e){
//  setSetlect(e)
//  }
//  function CloseForm(){
//  setSetlect(null)
//  }


function AddToDo(item){
    setList([...list,item])
    console.log(item)
}

    useEffect(()=>{
        const modalElement = document.getElementById("staticBackdrop");
    if (modalElement) {
        const modal = new Modal(modalElement);
        if (select) {
            modal.show();
        } else {
            modal.dispose();
            navigate('/');
        }
    }
    },[select])

    return(
        <div className='text-center'>
            <h1>Danh sách món ăn</h1>
            <div className='list'>
                {
                    data.map((item)=>(
                        <div key={item.id}  >
                            <img src={item.img} alt=""  onClick={()=>setSelect(item)} />
                            <p>{item.name}</p>
                            <p>Price:{item.price}</p>
                            <button onClick={()=>AddToDo(item,)}>Add Card</button>

                        </div>
                    ))
                }
            </div>

              {
                select&&(
                    
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdrop" aria-hidden="true" role='dialog'>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setSelect(null)}>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <img src={select?.img} alt="" />
                            <p>{select?.name}</p>
                            <p>{select?.price}</p>
                            <p>{select?.descreption}</p>

                          </div>
                           
                        </div>
                      </div>
                    </div>
                    
                )
              }

        </div>
    )
    
}