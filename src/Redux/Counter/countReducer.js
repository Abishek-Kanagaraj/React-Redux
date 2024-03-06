import { INCREMENT } from "./countTypes"

const intialState = {
    count: 0
}

export const countReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}