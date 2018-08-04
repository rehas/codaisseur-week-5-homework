export const UPDATE_PRICE = 'UPDATE_PRICE'
export const CANCEL_BASE = 'CANCEL_BASE'

const baseToPrice = {
  0 : 0.00,
  25: 8.99,
  30: 11.49,
  35: 13.49
}

const sauceToPrice = {
  'no': 0,
  'white': 0,
  'red' : 1.00,
  'mix' : 1.50
}

export const updatePrice = () => (dispatch, getState) =>{
  const pizzaStatus = getState().status
  // console.log(state)

   let price  = baseToPrice[pizzaStatus.base]
   if(sauceToPrice[pizzaStatus.sauce]){
     price += sauceToPrice[pizzaStatus.sauce]
   }
   price += (pizzaStatus.top.length * 0.5)


  return dispatch({
      type : UPDATE_PRICE,
      payload : price
    })
  }

