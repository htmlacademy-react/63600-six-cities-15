import MainPage from '../../pages/main/main-page.tsx';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}: AppProps) : JSX.Element {
  return (
    <MainPage placesCount={placesCount}/>
  );
}
