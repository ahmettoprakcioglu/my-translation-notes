import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import CardFlip from './CardFlip';
import { useState } from 'react';
import { array } from 'prop-types';

const RandomWordGenerator = ({
  translationNotes
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [word, setWord] = useState({ originalWord: '', translation: '' });

  const pickWord = () => {
    setIsFlipped(false);
    setIsLoading(true);
    let randomElement = translationNotes[Math.floor(Math.random() * translationNotes.length)];

    setTimeout(() => {
      setIsLoading(false);
      setWord(randomElement);
    }, 1200);
  };

  const flipCard = word => {
    if (!word) return;
    setIsFlipped(curr => !curr);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <button className="btn" onClick={pickWord} disabled={`${isLoading ? 'disabled' : ''}`}>
        <GiPerspectiveDiceSixFacesRandom className='h-6 w-6' />
          Pick a Random Word
      </button>
      <CardFlip isLoading={isLoading} randomTranslationElement={word} isFlipped={isFlipped} flipCard={flipCard} />
    </div>
  );
};

export default RandomWordGenerator;

RandomWordGenerator.propTypes = {
  translationNotes: array
};

RandomWordGenerator.defaultProps = {
  translationNotes: []
};
