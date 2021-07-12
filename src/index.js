import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { Firebase, firebase } from './lib/firabase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ Firebase, firebase }}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
