import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { hotelRoutes } from '../routes';

const AppRouter = () => {
  return (
    <Routes>
      {hotelRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
    </Routes>
  );
};

export default AppRouter;