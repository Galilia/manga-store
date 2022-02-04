import React from "react";
import './manga-list-item.css';

const MangaListItem = ({ manga, onAddedToCart }) => {
  const { title, author, price, coverImage } = manga;
  return (
    <div className="manga-list-item">
      <div className="manga-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="manga-details">
        <span className="manga-title">{title}</span>
        <div className="manga-author">{author}</div>
        <div className="manga-price">{price}</div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default MangaListItem;