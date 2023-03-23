const intitialState = {
    count: 0,
    value: 0
};

const counterReducer = (state = intitialState, action:any) =>{
    switch (action.type){
        case "INCREMENT":
        return  {...state,count: state.count + 1};
        case "DECREMENT":
        return {...state,count: state.count - 1};
        case "INCREASE":
        return {...state, count: state.count + action.payload}
        default:
            return state;
    }
};

export default counterReducer;