import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HotelStore from './strore/HotelStore';
import TypeHotelStore from './strore/TypeHotelStore';
import SpecialOffersStore from './strore/SpecialOffersStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
      hotel: new HotelStore(),
      typeHotel: new TypeHotelStore(),
      offers: new SpecialOffersStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
