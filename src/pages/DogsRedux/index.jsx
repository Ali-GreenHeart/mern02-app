import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import PageContainer from "../../components/PageContainer";
import { DOG_ACTIONS_REDUX } from "../../reducers/rootReducer";

const url = `https://dog-api.kinduff.com/api/facts?number=20`

const DogsRedux = ({ dispatch, dogs }) => {
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: DOG_ACTIONS_REDUX.get, payload: data.facts })
        })
    }, [])

    return (
        <PageContainer>
            <div style={{ padding: 10 }}>
                {
                    dogs.map((fact, index) => {
                        return (
                            <p key={fact}>
                                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
                                    let newFact = prompt('edit fact', fact)
                                    dispatch({ type: DOG_ACTIONS_REDUX.edit, payload: { newFact, index } })
                                }}>
                                    ${index}
                                </span>
                                <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => {
                                    dispatch({ type: DOG_ACTIONS_REDUX.delete, payload: fact })
                                }} > - #{index} - </span>
                                {fact}</p>
                        )
                    })
                }
            </div>
            <button onClick={() => {
                let fact = prompt('write a fact about dog')
                dispatch({ type: DOG_ACTIONS_REDUX.add, payload: fact })
            }}>add fact</button>
        </PageContainer>
    )
}
const mapStateToProps = (state) => state

export default connect(mapStateToProps)(DogsRedux);
