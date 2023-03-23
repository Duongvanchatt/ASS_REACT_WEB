import { createStore } from "redux";

const intialState ={
    count:0,
};

const action ={
    type: "INCREMENT",
};

const reducer = (state = intialState,action) =>{
    if(action.type = "INCREMENT") {
        return {
            count: state.count +1,
        }
    }
    return state;
};

const store = createStore(reducer);
console.log("intialState", store.getState());
store.dispath(action);
console.log("intialState", store.getState());