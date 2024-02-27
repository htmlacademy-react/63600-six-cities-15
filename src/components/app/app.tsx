import Main from '../../pages/main/main.tsx';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}: AppProps) : JSX.Element {
  return (
    <Main placesCount={placesCount}/>
  );
}
