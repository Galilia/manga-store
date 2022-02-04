import React, { Component } from "react";
import MangaListItem from "../manga-list-item";
import { connect } from 'react-redux';
import {withMangaStoreService} from "../hoc";
import { fetchMangas, mangaAddedToCart } from "../../actions";
import {bindActionCreators} from "redux";
import compose from "../../utils";
import './manga-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const MangaList = ( { mangas, onAddedToCart } ) => {
  return (
    <ul className="manga-list">
      {
        mangas.map((manga) => {
          return (
            <li key={manga.id} >
              <MangaListItem manga={manga} onAddedToCart={() => onAddedToCart(manga.id)}/>
            </li>
          )
        })
      }
    </ul>
  )
}

class MangaListContainer extends Component {

  componentDidMount() {
    this.props.fetchMangas();
  }

  render() {
    const { mangas, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <ErrorIndicator />
    }
    return  <MangaList mangas={mangas} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({ mangaList: { mangas, loading, error } }) => {
  return { mangas, loading, error };
}

const mapDispatchToProps = (dispatch, { mangaStoreService }) => {
  return bindActionCreators({
    // fetchMangasOld: fetchMangas(dispatch, mangaStoreService),
    // onAddedToCart: (id) => dispatch(mangaAddedToCart(id)),
    fetchMangas: fetchMangas(mangaStoreService), // THUNK
    onAddedToCart: mangaAddedToCart // THUNK
  }, dispatch);
};

export default compose(withMangaStoreService(), connect(mapStateToProps, mapDispatchToProps))(MangaListContainer);