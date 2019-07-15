'use strict';

const database = require('../database');
const moviesServices = require('../movies/movies-service');

database.connect().then(async () => {
  const movies = [
    {
      imdbId: 'tt5884052',
      title: 'Pokémon Detective Pikachu',
      releaseDate: '10 May 2019',
      genres: ['Action', 'Adventure', 'Comedy', 'Family', 'Mystery', 'Sci-Fi'],
      actors: [
        'Ryan Reynolds',
        'Justice Smith',
        'Kathryn Newton',
        'Bill Nighy',
      ],
      plot:
        'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/1roy4o4tqQM',
    },
    {
      imdbId: 'tt6105098',
      title: 'The Lion King',
      releaseDate: '18 Jul 2019',
      genres: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
      actors: [
        'John Kani',
        'Seth Rogen',
        'Donald Glover',
        'Keegan-Michael Key',
      ],
      plot:
        'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/7TavVZMewpY',
    },
    {
      title: 'Toy Story 4',
      releaseDate: '21 Jun 2019',
      genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
      actors: ['Tom Hanks', 'Tim Allen', 'Annie Potts', 'Tony Hale'],
      plot:
        'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/wmiIUN-7qhE',
    },
  ];

  for (const movie of movies) {
    await moviesServices.create(movie);
  }
  await database.connection.close();
});
