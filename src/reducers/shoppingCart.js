const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ]
}

const updateCartItem = (manga, item = {}, quantity) => {

  const {
    id = manga.id,
    count = 0,
    title = manga.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*manga.price
  }
}

const updateOrder = (state, mangaId, quantity) => {
  const { mangaList: { mangas }, shoppingCart: { cartItems } } = state;
  const manga = mangas.find(({ id }) => id === mangaId);
  const itemIndex = cartItems.findIndex(({id}) => id === mangaId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(manga, item, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
}

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch (action.type){
    case 'MANGA_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'MANGA_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_MANGAS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
      return updateOrder(state, action.payload, -item.count)

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;