import { ADD_DETAILS, GET_DETAILS } from "./constant"

export const SocialLoginData = (data = [], action) => {

    switch (action.type) {
        case GET_DETAILS:
            console.warn("GET_DETAILS  reducer is called", action)
            return [...action.data]
        case ADD_DETAILS:
            console.warn("ADD SOCIAL reduceris called",action)
            return [action.data]
        default:
            return data
    }
}