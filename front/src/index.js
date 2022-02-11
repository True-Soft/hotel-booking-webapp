import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HotelStore from './strore/HotelStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
      hotel: new HotelStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
