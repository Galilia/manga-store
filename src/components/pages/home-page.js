import React from "react";
import MangaList from "../manga-list";
import ShoppingCartTable from "../shop-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <MangaList />
      <ShoppingCartTable />
    </div>
  )
}

export default HomePage;