export const addToCartSuccess = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };