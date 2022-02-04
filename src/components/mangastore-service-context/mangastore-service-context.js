import React from "react";

const {
  Provider: MangaStoreServiceProvider,
  Consumer: MangaStoreServiceConsumer,
} = React.createContext();

export {
  MangaStoreServiceProvider,
  MangaStoreServiceConsumer
}