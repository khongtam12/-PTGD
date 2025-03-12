import React,{useReducer, useState} from "react";
  



export default function Bai1(){

const initialState={sum:0}
function reducer(state,action){
    switch(action.type){
        case '+':
            return{sum:action.a+action.b};
        case '-':
            return{sum:action.a-action.b};
        case '*':
            return{sum:action.a*action.b};
        case '/':
            return{sum:action.a/action.b};
        default:
                return state;   
    }
}
    const [state, dispatch]=useReducer(reducer,initialState);
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);

    function onchangHanldeA(e){
        setA(parseInt(e.target.value) || 0);
    }
    function onchangHanldeB(e){
        setB(parseInt(e.target.value) || 0);
    }



    return (

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input type='text' onChange={onchangHanldeA} placeholder='Nhập a'></input>
                <br />
                <input  type='text'onChange={onchangHanldeB} placeholder='Nhập b'></input>
                <br />
                <button onClick={()=>dispatch({type:'+', a, b })}>+</button>
                <button onClick={()=>dispatch({type:'-', a, b })}>-</button>
                <button onClick={()=>dispatch({type:'*', a, b })}>*</button>
                <button onClick={()=>dispatch({type:'/', a, b })}>/</button>
                <h3>Hien ket qua:{state.sum}</h3>



        </div>
    )
}