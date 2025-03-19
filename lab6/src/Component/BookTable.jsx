import { useState } from "react"
export default function BookTable(){
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("")
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guests,setGuests]=useState(1);
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Đặt bàn thành công:${name},Số khách:${guests},Ngày:${date},giờ:${time}`);

    }

    return(
       <div>
        <h1>
            Đặt bàn
        </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Họ và tên" value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input type="tel" placeholder="Số điện thoại" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
            <input type="number" min={1} value={guests} onChange={(e)=>setGuests(e.target.value)} required />
            <button type="submit"> Xác Nhận</button>
        </form>
       </div>

    )
}