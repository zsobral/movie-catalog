import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Field } from 'formik';
import getOr from 'lodash/fp/getOr';

import { useMovies } from '../contexts/movies-context';
import { InputField, TextAreaField } from '../components/field';
import { Button } from '../components/button';

const MovieForm = ({ id, history, match }) => {
  const [state, actions] = useMovies();
  const movie = state.byId[id];

  useEffect(() => {
    if (id && !movie) {
      actions.getMovieById(id);
    }
  }, [id, movie]); // eslint-disable-line react-hooks/exhaustive-deps

  const goBack = () => {
    const lastSlash = /\/[^/]+$/;
    const newPath = match.url.replace(lastSlash, '');
    history.push(newPath);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          title: getOr('', 'title', movie),
          releaseDate: getOr('', 'releaseDate', movie),
          plot: getOr('', 'plot', movie),
          trailerUrl: getOr('', 'trailerUrl', movie),
          posterUrl: getOr('', 'posterUrl', movie),
          genres: getOr([], 'genres', movie).join(', '),
          actors: getOr([], 'actors', movie).join(', '),
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const mode = id === undefined ? 'create' : 'update';

          if (mode === 'update') {
            try {
              const response = await actions.updateMovie(id, {
                title: values.title,
                plot: values.plot,
                releaseDate: values.releaseDate,
                posterUrl: values.posterUrl,
                trailerUrl: values.trailerUrl,
                actors: values.actors.split(',').map(actor => actor.trim()),
                genres: values.genres.split(',').map(genre => genre.trim()),
              });
              if (response && response.error) {
                return;
              }
              goBack();
            } catch (error) {
              console.error(error);
            }
            setSubmitting(false);
          }
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              label="Title"
              type="text"
              component={InputField}
            />
            <Field
              name="plot"
              label="Plot"
              component={TextAreaField}
              rows="7"
              style={{ resize: 'vertical' }}
            />
            <Field
              name="releaseDate"
              label="Release Date"
              type="text"
              component={InputField}
            />
            <Field
              name="posterUrl"
              label="Poster URL"
              type="text"
              component={InputField}
            />
            <Field
              name="trailerUrl"
              label="Trailer URL"
              type="text"
              component={InputField}
            />
            <Field
              name="actors"
              label="Actors"
              type="text"
              component={InputField}
            />
            <Field
              name="genres"
              label="Genres"
              type="text"
              component={InputField}
            />
            <Button type="button" kind="secondary" onClick={goBack}>
              Cancel
            </Button>
            <Button type="submit" style={{ marginLeft: 8 }}>
              Save
            </Button>
          </form>
        )}
      />
    </>
  );
};

export default withRouter(MovieForm);
