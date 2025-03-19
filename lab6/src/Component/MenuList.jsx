import { useEffect,useState } from "react";
import menuData from './menu.json'

export default function MenuList(){
const Menu =()=>{
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        setMenu(menuData)
    },[])
}
    return(
        <div >
            <h1>Thực đơn</h1>
            <div>
                {menuData.map((item)=>(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.descreption}</p>
                        <p>{item.price}</p>
                        
                    </div>
                   

                ))}
            </div>
        </div>
    )
}