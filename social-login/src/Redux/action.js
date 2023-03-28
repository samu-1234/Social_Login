import { ADD_SOCIAL_DETAILS, GET_SOCIAL_DETAILS } from "./constant"

export const dataList =  () => {
 
    return {
        type: GET_SOCIAL_DETAILS,
       
    }
}

export const addsocialLogin=() =>{
    return {
        type: ADD_SOCIAL_DETAILS,
    }
}

