export const EXPRESS_DELIVERY = 'EXPRESS_DELIVERY'

export const expressDelivery = (selection) => (dispatch) =>{
  return dispatch({
    type : EXPRESS_DELIVERY,
    payload: selection
  })
}