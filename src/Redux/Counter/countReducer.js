import { INCREMENT } from "./countTypes"

const intialState = {
    count: 0
}

export const countReducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: Number(state.count) + Number(action.payload)
            }
        default:
            return state
    }
}