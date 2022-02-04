const updateMangaList = (state, action) => {

  if (state === undefined) {
    return {
      mangas: [],
      loading: true,
      error: null,
    }
  }

  switch (action.type) {
    case 'FETCH_MANGAS_REQUESTED':
      return {
        mangas: [],
        loading: true,
        error: null,
      };

    case 'FETCH_MANGAS_SUCCESS':
      return {
        mangas: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_MANGAS_FAILURE':
      return {
        mangas: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.mangaList;
  }
};

export default updateMangaList;