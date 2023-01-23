import Image from 'next/image';
import { useQuery } from 'react-query';
import { getDogs } from '../api/dogs';

type DogListProps = {
  dogBreed?: string;
};

const DogList = ({ dogBreed = '' }: DogListProps) => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery(['random-dogs', dogBreed], async () => await getDogs(dogBreed), { cacheTime: Infinity, enabled: true });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <p>{`ERROR: ${error}`}</p>;

  const {
    data: { message },
  } = response!;

  if (message.length === 0) return <h1>Any</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {message.map((url, index) => (
        <Image key={`dog-${index}`} src={url} width={300} height={200} alt={`dog-img-${index}`} />
      ))}
    </div>
  );
};

export default DogList;
