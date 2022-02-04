import updateMangaList from "./mangaList";
import updateShoppingCart from "./shoppingCart";

const reducer = (state, action) => {
  return {
    mangaList: updateMangaList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
}

export default reducer;