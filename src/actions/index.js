const mangasRequested = () => {
  return {
    type: 'FETCH_MANGAS_REQUESTED',
  }
}

const mangasLoaded = (newMangas) => {
  return {
    type: 'FETCH_MANGAS_SUCCESS',
    payload: newMangas
  }
}

const mangasError = (error) => {
  return {
    type: 'FETCH_MANGAS_FAILURE',
    payload: error
  }
}

export const mangaAddedToCart = (mangaId) => {
  return {
    type: "MANGA_ADDED_TO_CART",
    payload: mangaId
  }
}

export const mangaRemovedFromCart = (mangaId) => {
  return {
    type: "MANGA_REMOVED_FROM_CART",
    payload: mangaId
  }
}

export const allMangasRemovedFromCart = (mangaId) => {
  return {
    type: "ALL_MANGAS_REMOVED_FROM_CART",
    payload: mangaId
  }
}

const fetchMangasOld = (dispatch, mangaStoreService) => () => {
  dispatch(mangasRequested());
  mangaStoreService.getMangas()
    .then((data) => dispatch(mangasLoaded(data)))
    .catch((err) => dispatch(mangasError(err)));
}

const fetchMangas = (mangaStoreService) => () => (dispatch) => {
  dispatch(mangasRequested());
  mangaStoreService.getMangas()
    .then((data) => dispatch(mangasLoaded(data)))
    .catch((err) => dispatch(mangasError(err)));
}

export {
  fetchMangas,
};