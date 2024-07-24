import { bool, func, shape, string } from 'prop-types';
import ReactCardFlip from 'react-card-flip';

const CardFlip = ({
  isLoading,
  randomTranslationElement,
  isFlipped,
  flipCard
}) => {
  const { originalWord, translation } = randomTranslationElement;

  return (
    <div className='cursor-pointer flex-1 w-full bg-primary rounded-md' onClick={() =>flipCard(originalWord)}>
      {isLoading ? (
        <div className='flex h-full justify-center items-center'>
          <span className="loading loading-ring loading-lg text-primary-content"></span>
        </div>
      ) : (
        <ReactCardFlip flipDirection="horizontal" containerClassName='h-full' isFlipped={isFlipped}>
          <div className='h-full flex items-center justify-center text-primary-content font-bold'>
            <h1>{originalWord || 'Please click the Pick button'}</h1>
          </div>
          <div className='h-full flex items-center justify-center text-primary-content font-bold'>
            <h1>{translation}</h1>
          </div>
        </ReactCardFlip>
      )}
    </div>
  );
};

export default CardFlip;

CardFlip.propTypes = {
  isLoading: bool,
  randomTranslationElement: shape({
    originalWord: string,
    translation: string
  }),
  isFlipped: bool,
  flipCard: func
};

CardFlip.defaultProps = {
  isLoading: false,
  randomTranslationElement: {
    originalWord: '',
    translation: ''
  },
  isFlipped: false,
  flipCard: f => f
};
