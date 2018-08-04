 import { UPDATE_PRICE} from '../actions/price'

const initialState = 0;

export default function (state= initialState, action){
  switch (action.type) {
    case UPDATE_PRICE:
      return action.payload
    // case CANCEL_SAUCE:
    //   return initialState
    default:
      return state
  }
}