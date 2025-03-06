import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useMutation } from '@tanstack/react-query';
import { getRandomTranslationNote } from '../services/apiNotes';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

const RandomWordGenerator = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomNote, setRandomNote] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: getRandomTranslationNote,
    onSuccess: (data) => {
      setRandomNote(data);
    }
  });

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  const handlePickWord = () => {
    setIsFlipped(false);
    mutate();
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <button 
        className="btn" 
        onClick={handlePickWord}
        disabled={isLoading}
      >
        <GiPerspectiveDiceSixFacesRandom className='h-6 w-6' />
        Pick a Random Word
      </button>

      <div 
        className="flex-1 cursor-pointer bg-primary text-primary-content rounded-xl"
        onClick={handleClick}
      >
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : !randomNote ? (
          <div className="h-full flex items-center justify-center text-lg">
            Please click the Pick button
          </div>
        ) : (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName="h-full">
            <div className="h-full flex items-center justify-center text-2xl font-bold p-4">
              {randomNote.originalWord}
            </div>
            <div className="h-full flex items-center justify-center text-2xl font-bold p-4">
              {randomNote.translation}
            </div>
          </ReactCardFlip>
        )}
      </div>
    </div>
  );
};

export default RandomWordGenerator;
