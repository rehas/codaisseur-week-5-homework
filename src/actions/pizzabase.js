export const CHOOSE_BASE = 'CHOOSE_BASE'
export const CANCEL_BASE = 'CANCEL_BASE'

export const chooseBase = (base) => (dispatch) =>{
  return dispatch({
      type : CHOOSE_BASE,
      payload : base
    })
  }

export const cancelBase = () => (dispatch) => {
  return dispatch({
    type: CANCEL_BASE
  })
}