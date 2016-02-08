import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MovieChatIndex from './components/movie_chat_index';
import MovieShow from './components/movie_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieChatIndex} />
    <Route path="movies/:id" component={MovieShow} />
  </Route>
);
