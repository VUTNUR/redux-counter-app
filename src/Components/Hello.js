import React from "react";
// import { UseSelector, UseDispatch } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import { increase,decrease,reset } from "../redux/actions/counterAction";

const Hello=()=>{
    const count = useSelector((x)=>x.count)
    const dispatch= useDispatch();

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dispatch(increase(100))}>Increase</button>
            <button onClick={()=>dispatch(decrease(100))}>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}


export default Hello;

