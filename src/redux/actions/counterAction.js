import { INCREASE,DECREASE,RESET } from "./actionTypes";

export const increase=(value=1)=>{
    return {
        type:INCREASE,
        value:value
    }
}


export const decrease=(value=1)=>{
    return {
        type:DECREASE,
        value:value
    }
}

export const reset =(value=1)=>{
    return {
        type:RESET,
        value:value
    }
}