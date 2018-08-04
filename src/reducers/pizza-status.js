import { CHOOSE_BASE, CANCEL_BASE } from '../actions/pizzabase'
import { CHOOSE_SAUCE, CANCEL_SAUCE } from '../actions/pizzasauce'
import { CHOOSE_TOPPINGS } from '../actions/pizzatoppings'

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
    case CHOOSE_TOPPINGS:
      if(Object.values(action.payload)[0]){
        const newToppings = state.top.concat(Object.keys(action.payload)[0])
        return {
          ...state,
          top: newToppings
        }
      }else{
        const newToppings = state.top.filter(x=> x !== Object.keys(action.payload)[0])
        return {
          ...state,
          top: newToppings
        }
      }
  
    default:
      return state
  }
}