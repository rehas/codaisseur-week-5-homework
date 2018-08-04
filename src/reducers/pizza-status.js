import { CHOOSE_BASE, CANCEL_BASE } from '../actions/pizzabase'
import { CHOOSE_SAUCE, CANCEL_SAUCE } from '../actions/pizzasauce'

const initialState = {
  base : null,
  sauce: null,
  top : [],
  fast: false,
}

export default function(state = initialState, action){
  switch (action.type) {
    case CHOOSE_BASE:
      return {
        ...state,
        base: action.payload
      }
    case CHOOSE_SAUCE:
      return {
        ...state,
        sauce: action.payload
      }
  
    default:
      return state
  }
}