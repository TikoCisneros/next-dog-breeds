import type { NextPage } from 'next';
import DogList from '../components/DogList';
import SearchBar from '../components/SearchBar';

const Home: NextPage = () => {
  return (
    <>
      <SearchBar />
      <DogList />
    </>
  );
};

export default Home;
