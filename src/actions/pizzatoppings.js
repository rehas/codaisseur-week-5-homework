export const CHOOSE_TOPPINGS = 'CHOOSE_TOPPINGS'

export const chooseToppings = (topping) => (dispatch) =>{
  return dispatch({
    type : CHOOSE_TOPPINGS,
    payload : topping
  })
}