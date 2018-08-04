export const UPDATE_PRICE = 'UPDATE_PRICE'

const basePriceList = {
  25: 8.99,
  30: 11.49,
  35: 13.49
}

const saucePriceList = {
  white: 0.0,
  red: 1.0,
  mix: 1.5
}


export const updatePrice = (pizza_options) => (dispatch) =>{
  console.log(basePriceList[pizza_options.base])
  const base_price = basePriceList[pizza_options.base];
  const sauce_price = saucePriceList[pizza_options.sauce]
  const topping_price = 0;
  // const express_price = pizza_options.express &&  pizza_options.express === true ? 1.1 : 1.0

  const updatedPrice = (base_price + sauce_price + topping_price)//*express_price
  console.log(updatedPrice)
  return dispatch({
      type : UPDATE_PRICE,
      payload : updatedPrice
    })
  }

// export const cancelBase = () => (dispatch) => {
//   return dispatch({
//     type: CANCEL_BASE
//   })
// }