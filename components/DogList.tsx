import { useQuery } from 'react-query';

import { getDogs } from '../api/dogs';
import DogCard from './DogCard';

type DogListProps = {
  dogBreed?: string;
};

const DogList = ({ dogBreed = '' }: DogListProps) => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery(['random-dogs', dogBreed], async () => await getDogs(dogBreed), { staleTime: Infinity, enabled: true });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <p>{`ERROR: ${error}`}</p>;

  const {
    data: { message },
  } = response!;

  if (message.length === 0) return <h1>Any</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {message.map((url, index) => (
        <DogCard key={`dog${dogBreed}-${index}`} imageAlt={`dog-img-${index}`} imageUrl={url} />
      ))}
    </div>
  );
};

export default DogList;
