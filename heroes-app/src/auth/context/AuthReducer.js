import { type } from "../types/types"


export const reducer = (state = {},action) =>{
    switch (action.type) {
        case type.login:
            return {
                ...state,
                logged:true,
                name:action.payload
            }
        case type.logout:
            return {
                logged:false
            }
        default:
            return state;
    }
}