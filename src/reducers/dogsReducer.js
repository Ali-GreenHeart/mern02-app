
export const DOG_ACTIONS = {
    get: 'get',
    delete: "delete",
    add: 'add',
    edit: 'edit'
}
const dogsReducer = (state, { type, payload }) => {
    switch (type) {
        case DOG_ACTIONS.get:
            return payload
        case DOG_ACTIONS.delete:
            return state.filter((fact) => fact !== payload)
        case DOG_ACTIONS.add:
            return [...state, payload]
        case DOG_ACTIONS.edit:
            const { index, newFact } = payload
            state.splice(index, 1, newFact)
            return [...state]
        default:
            return state;
    }
}
export default dogsReducer;
