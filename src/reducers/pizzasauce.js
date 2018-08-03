import { CHOOSE_SAUCE, CANCEL_SAUCE } from '../actions/pizzasauce'

const initialState = null;

export default function (state= initialState, action){
  switch (action.type) {
    case CHOOSE_SAUCE:
      return action.payload
    case CANCEL_SAUCE:
      return initialState
    default:
      return state
  }
}