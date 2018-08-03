const initialState = [];


export default function (state= initialState, action){
  switch (action.type) {
    case 'ADD_TOPIC':
      return [
        ...state, 
        action.payload
      ]
    case 'CANCEL_TOPIC':
      return state.filter(topic=> topic!==action.payload)
    default:
      return state
  }
}