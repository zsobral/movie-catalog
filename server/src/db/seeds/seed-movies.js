'use strict';

const database = require('../../database');
const moviesServices = require('../../movies/movies-service');

database.connect().then(async () => {
  const movies = [
    {
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
    {
      title: 'The Hobbit: An Unexpected Journey',
      releaseDate: '14 Dec 2012',
      genres: ['Adventure', 'Family', 'Fantasy'],
      actors: [
        'Ian McKellen',
        'Martin Freeman',
        'Richard Armitage',
        'Ken Stott',
      ],
      plot:
        'Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through treacherous lands swarming with Goblins and Orcs, deadly Wargs and Giant Spiders, Shapeshifters and Sorcerers. Although their goal lies to the East and the wastelands of the Lonely Mountain first they must escape the goblin tunnels, where Bilbo meets the creature that will change his life forever ... Gollum. Here, alone with Gollum, on the shores of an underground lake, the unassuming Bilbo Baggins not only discovers depths of guile and courage that surprise even him, he also gains possession of Gollum\'s "precious" ring that holds unexpected and useful qualities ... A simple, gold ring that is tied to the fate of all Middle-earth in ways Bilbo cannot begin to know.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/SDnYMbYB-nU',
    },
    {
      title: 'Deadpool',
      releaseDate: '12 Feb 2016',
      genres: ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
      actors: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer'],
      plot:
        'This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/ONHBaC-pfsk',
    },
    {
      title: 'The Secret Life of Pets 2',
      releaseDate: '07 Jun 2019',
      genres: ['Animation', 'Adventure', 'Comedy', 'Family'],
      actors: [
        'Patton Oswalt',
        'Kevin Hart',
        'Harrison Ford',
        'Eric Stonestreet',
      ],
      plot:
        'Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BMzdlMWQzZmItMDA5Ny00MGFjLTk0MDAtYjgzMmMyNTEwMzdhXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/mYocfuqu2A8',
    },
    {
      title: 'Venom',
      releaseDate: '05 Oct 2018',
      genres: ['Action', 'Sci-Fi', 'Thriller'],
      actors: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed', 'Scott Haze'],
      plot:
        'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/u9Mv98Gr5pY',
    },
    {
      imdbId: 'tt3315342',
      title: 'Logan',
      releaseDate: '03 Mar 2017',
      genres: ['Action', 'Drama', 'Sci-Fi', 'Thriller'],
      actors: [
        'Hugh Jackman',
        'Patrick Stewart',
        'Dafne Keen',
        'Boyd Holbrook',
      ],
      plot:
        'In 2029 the mutant population has shrunken significantly and the X-Men have disbanded. Logan, whose power to self-heal is dwindling, has surrendered himself to alcohol and now earns a living as a chauffeur. He takes care of the ailing old Professor X whom he keeps hidden away. One day, a female stranger asks Logan to drive a girl named Laura to the Canadian border. At first he refuses, but the Professor has been waiting for a long time for her to appear. Laura possesses an extraordinary fighting prowess and is in many ways like Wolverine. She is pursued by sinister figures working for a powerful corporation; this is because her DNA contains the secret that connects her to Logan. A relentless pursuit begins - In this third cinematic outing featuring the Marvel comic book character Wolverine we see the superheroes beset by everyday problems. They are aging, ailing and struggling to survive financially. A decrepit Logan is forced to ask himself if he can or even wants to put his remaining powers to good use. It would appear that in the near-future, the times in which they were able put the world to rights with razor sharp claws and telepathic powers are now over.',
      posterUrl:
        'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      trailerUrl: 'https://www.youtube.com/embed/Div0iP65aZo',
    },
  ];

  for (const movie of movies) {
    await moviesServices.create(movie);
  }
  await database.connection.close();
});
