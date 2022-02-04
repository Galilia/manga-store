import React from "react";
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import ErrorBoundary from "./components/error-boundry/error-boundary";
import MangaStoreService from "./services/mangastore-service";
import {MangaStoreServiceProvider} from "./components/mangastore-service-context";
import store from "./store";

const mangaStoreService = new MangaStoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <MangaStoreServiceProvider value={mangaStoreService}>
        <Router>
          <App/>
        </Router>
      </MangaStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);