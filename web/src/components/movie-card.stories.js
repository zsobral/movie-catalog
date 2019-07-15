import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { MovieCard } from './movie-card';

storiesOf('MovieCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ display: 'flex' }}>
      <MovieCard
        posterUrl={text(
          'Poster URL',
          'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
        )}
        alt="Batman"
      />
    </div>
  ));
