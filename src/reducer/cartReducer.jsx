function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { id, quantity, product } = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id === id);
    if (existingProduct) {
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id == id) {
          let newQuantity = curElem.quantity + quantity;
          if (newQuantity >= curElem.max) {
            newQuantity = curElem.max;
          }
          return { ...curElem, quantity: newQuantity };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decQuantity = curElem.quantity - 1;
        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...curElem,
          quantity: decQuantity,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incQuantity = curElem.quantity + 1;
        if (incQuantity >= curElem.max) {
          incQuantity = curElem.max;
        }
        return {
          ...curElem,
          quantity: incQuantity,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let updatedCartItem = state.cart?.reduce((initialValue, curElem) => {
  //     let { quantity } = curElem;
  //     initialValue = initialValue + quantity;
  //     return initialValue;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_item: updatedCartItem,
  //   };
  // }

  // if (action.type === "CART_TOTAL_AMOUNT") {
  //   let total_amount = state.cart?.reduce((initialValue, curElem) => {
  //     let { price, quantity } = curElem;
  //     initialValue = initialValue + quantity * price;
  //     return initialValue;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_amount,
  //   };
  // }

  return state;
}

export default cartReducer;
