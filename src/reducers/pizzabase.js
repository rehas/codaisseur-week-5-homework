const initialState = null;


export default function (state= initialState, action){
  switch (action.type) {
    case 'CHOOSE_BASE':
      return action.payload
    case 'CANCEL_BASE':
      return initialState
    default:
      return state
  }
}