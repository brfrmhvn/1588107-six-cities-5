import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  offersCount: number;
}

export default function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}
