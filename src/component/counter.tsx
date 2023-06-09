import React from "react";
import { ICounter } from "../interface/counter";
import { useSelector, useDispatch } from "react-redux";
type Props = {

}

const Counter = ()  => {
    const counter = useSelector((state:ICounter) => state.count);
    const dispatch = useDispatch();
    return <div>
        {counter}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>DECREMENT</button>
    </div>
}

export default Counter;