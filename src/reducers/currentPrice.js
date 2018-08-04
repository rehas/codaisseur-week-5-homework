import { UPDATE_PRICE } from '../actions/price'

const initialState = 0;

export default function(state = initialState, action){
  switch (action.type) {
    case UPDATE_PRICE:
      return action.payload
    default:
      return state
  }
}