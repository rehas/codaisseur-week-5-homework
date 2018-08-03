export const CHOOSE_SAUCE = 'CHOOSE_SAUCE'
export const CANCEL_SAUCE = 'CANCEL_SAUCE'

export const chooseSauce = (sauce) => (dispatch) =>{
  return dispatch({
      type : CHOOSE_SAUCE,
      payload : sauce
    })
  }

export const cancelSauce = () => (dispatch) => {
  return dispatch({
    type: CANCEL_SAUCE
  })
}