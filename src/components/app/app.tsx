import Main from '../../pages/main/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import FavoritesPage from '../../pages/favorites/favorites.tsx';
import LoginPage from '../../pages/login/login.tsx';
import NotFoundPage from '../../pages/not-found/not-found.tsx';
import OfferPage from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}: AppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}
          element={<Main placesCount={placesCount}></Main>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
