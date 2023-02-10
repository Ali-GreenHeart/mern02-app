const baslangic = {
    dogs: [],
}

export const DOG_ACTIONS_REDUX = {
    get: 'get',
    delete: "delete",
    add: 'add',
    edit: 'edit'
}

const rootReducer = (state = baslangic, { type, payload }) => {
    switch (type) {
        case DOG_ACTIONS_REDUX.get:
            return { ...state, dogs: payload }
        case DOG_ACTIONS_REDUX.delete:
            return { ...state, dogs: state.dogs.filter((fact) => fact !== payload) }
        case DOG_ACTIONS_REDUX.add:
            return { ...state, dogs: [...state.dogs, payload] }
        case DOG_ACTIONS_REDUX.edit:
            const { index, newFact } = payload
            state.dogs.splice(index, 1, newFact)
            return { ...state, dogs: [...state.dogs] }
        default:
            return state;
    }
}
export default rootReducer;
