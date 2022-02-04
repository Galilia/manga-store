import React from "react";
import {MangaStoreServiceConsumer} from "../mangastore-service-context";

const withMangaStoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <MangaStoreServiceConsumer>
        {
          (mangaStoreService) => (<Wrapped {...props} mangaStoreService={mangaStoreService}/>)
        }
      </MangaStoreServiceConsumer>
    );
  }
};

export default withMangaStoreService;