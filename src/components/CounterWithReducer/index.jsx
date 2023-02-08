import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'artir':
            return state + 1
        case 'azaltmaq':
            return state - 1
        case 'sifirlamaq':
            return 0
        case 'xususi':
            return action.payload
        default:
            return state;
    }
}

const CounterWithReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={
                    () => dispatch({ type: 'artir' })
                }
            >+</button>
            <button
                onClick={
                    () => dispatch({ type: 'azaltmaq' })
                }
            >-</button>
            <button
                onClick={
                    () => dispatch({ type: 'sifirlamaq' })
                }
            >sifirla</button>
            <button
                onClick={
                    () => {
                        let eded = +prompt()
                        dispatch({ type: 'xususi', payload: eded })
                    }
                }
            >xususi</button>
        </>
    )
}


export default CounterWithReducer;
