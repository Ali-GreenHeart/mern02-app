import axios from 'axios'
import { useEffect, useReducer } from 'react'
import GoogleMeetCard from '../../components/GoogleMeetCard'
import PageContainer from '../../components/PageContainer'
const url = 'https://jsonplaceholder.typicode.com/users'
const reducer = (state, action) => {
    switch (action.type) {
        case "get":
            return action.payload
    }
}




const Users = () => {
    const [users, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        axios.get(url).then((resp) => {
            dispatch({ type: "get", payload: resp.data })
            console.log(resp.data)
        })
    }, [])


    return (
        <PageContainer>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                {
                    users.map((user) => {
                        return <GoogleMeetCard
                            key={user.id}
                            name={user.name}
                            username={user.username} />
                    })
                }
            </div>
        </PageContainer>
    )
}

export default Users;
