export default class MangaStoreService {

  data = [
    {
      id: 1,
      title: 'Berserk',
      author: 'Kentaro Miura',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91D07epNE9L.jpg',
    },
    {
      id: 2,
      title: 'One Piece',
      author: 'I. Oda',
      price: 64,
      coverImage: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    },
    {
      id: 3,
      title: 'Evangelion',
      author: 'Noriko Kobayashi',
      price: 55,
      coverImage: 'https://image.tmdb.org/t/p/original/4n063I6pRLaN3vAbd5y6Xx9b3PW.jpg',
    }
  ];

  getMangas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // (Math.random() > 0.75) ? reject(new Error('SOmething bad happend')) : resolve(this.data);
        resolve(this.data);
      }, 1000);
    })
  }
}