import { INCREMENT } from "./countTypes"

export const increment = (number = 1) => {
    return {
        type: INCREMENT,
        payload: number
    }
}