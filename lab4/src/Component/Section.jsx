import {use, useEffect, useState } from "react"
import Item from "./Item"
import './Section.css'

export default function Section(){
    var url="https://67c83cad0acf98d070858a0d.mockapi.io/lab4/product"
    var [arr,setArr]=useState([])
   
    useEffect(()=>{
        var fn=fetch(url).then((r)=>r.json())
        .then(
            (data)=>{
                setArr(data)
            }
        )
    })

    return(
        <>
            <ul>
                {
                    arr.map((e,i)=>{
                        return(
                            <li key={i}>
                                <Item name={e.name} Image={e.Image} Fave={e.fave} />
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}