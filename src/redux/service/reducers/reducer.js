import { ADD_TO_CART } from "../constants";

const initialstate = {
    cardata : []
}

export default function cardItem(state = initialstate, action){
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer" , action)
            return {
                ...state ,
                carddata : action.data
            }
            break;
    
        default:
            return state
            break;
    }
}