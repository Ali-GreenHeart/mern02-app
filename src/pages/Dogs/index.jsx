import axios from "axios";
import { useEffect, useReducer } from "react";
import PageContainer from "../../components/PageContainer";
import dogsReducer, { DOG_ACTIONS } from "../../reducers/dogsReducer";

const url = `https://dog-api.kinduff.com/api/facts?number=10`

const Dogs = () => {
    const [state, dispatch] = useReducer(dogsReducer, [])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: DOG_ACTIONS.get, payload: data.facts })
        })
    }, [])

    return (
        <PageContainer>
            <div style={{ padding: 10 }}>
                {
                    state.map((fact, index) => {
                        return (
                            <p key={fact}>
                                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
                                    let newFact = prompt('edit fact', fact)
                                    dispatch({ type: DOG_ACTIONS.edit, payload: { newFact, index } })
                                }}>
                                    ${index}
                                </span>
                                <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                                    dispatch({ type: DOG_ACTIONS.delete, payload: fact })
                                }} > - #{index} - </span>
                                {fact}</p>
                        )
                    })
                }
            </div>
            <button onClick={() => {
                let fact = prompt('write a fact about dog')
                dispatch({ type: DOG_ACTIONS.add, payload: fact })
            }}>add fact</button>
        </PageContainer>
    )
}
export default Dogs;
