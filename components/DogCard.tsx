import Image from 'next/image';
import React from 'react';
import { HeartIcon } from './icons/HeartIcon';

type DogCardProps = {
  imageAlt: string;
  imageUrl: string;
  isFavorite?: boolean;
};

const DogCard = ({ imageAlt, imageUrl, isFavorite }: DogCardProps) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg w-60 h-60">
      <Image
        className="w-[100%] h-[100%] rounded-lg object-cover"
        src={imageUrl}
        width={240}
        height={240}
        alt={imageAlt}
      />
      <HeartIcon className={`absolute w-6 h-6 right-4 bottom-4 ${isFavorite ? 'text-red-600' : 'text-white'}`} />
    </div>
  );
};

export default DogCard;
