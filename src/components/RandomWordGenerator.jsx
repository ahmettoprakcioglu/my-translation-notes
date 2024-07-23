import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import CardFlip from './CardFlip';
import { useState } from 'react';

const RandomWordGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);

  const pickWord = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <button className="btn" onClick={pickWord} disabled={`${isLoading ? 'disabled' : ''}`}>
        <GiPerspectiveDiceSixFacesRandom className='h-6 w-6' />
          Pick a Random Word
      </button>
      <CardFlip isLoading={isLoading} />
    </div>
  );
};

export default RandomWordGenerator;
