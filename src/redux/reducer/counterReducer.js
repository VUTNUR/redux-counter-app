import { INCREASE,DECREASE,RESET } from "../actions/actionTypes";

let initialState={count:0}

function counterReducer(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return {...state,count:state.count+action.value};

        case DECREASE:
            return {...state,count:state.count-action.value};

        case RESET:
            return {count:0};

        default:
            return  state
    }
}

export default counterReducer;