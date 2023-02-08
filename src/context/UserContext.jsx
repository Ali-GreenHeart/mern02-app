import { createContext } from "react"

export const UserContext = createContext()

let human = {
    ad: 'ali',
    age: 22,
}

const UserContextComponent = ({ children }) => {
    return (
        <UserContext.Provider value={human}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextComponent;
