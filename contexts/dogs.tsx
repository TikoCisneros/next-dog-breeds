import { createContext, ReactNode, useContext, useReducer, useState } from 'react';

interface DogsContextProps {
  dogBreed: string;
  setDogBreed: (breed: string) => void;
  dogFavorites: string[];
  addDogFavorite: (dogUrl: string) => void;
  removeDogFavorite: (dogUrl: string) => void;
}

const DogsContext = createContext<Partial<DogsContextProps>>({});

export const DogsContextProvider = ({ children }: { children: ReactNode }) => {
  const [breed, setBreed] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const setDogBreed = (breed: string) => setBreed(breed.trim());
  const addDogFavorite = (dogUrl: string) => setFavorites((prevFavorites) => [...prevFavorites, dogUrl]);
  const removeDogFavorite = (dogUrl: string) =>
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.localeCompare(dogUrl) !== 0));

  return (
    <DogsContext.Provider
      value={{ dogBreed: breed, setDogBreed, dogFavorites: favorites, addDogFavorite, removeDogFavorite }}
    >
      {children}
    </DogsContext.Provider>
  );
};

export const useDogs = () => {
  const context = useContext(DogsContext);
  if (context === undefined) {
    throw new Error('useDogs must be used within a DogsContextProvider');
  }
  return context;
};
