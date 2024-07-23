import { bool } from 'prop-types';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CardFlip = ({
  isLoading
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(curr => !curr);

  return (
    <div className='cursor-pointer flex-1 w-full bg-primary rounded-md' onClick={flipCard}>
      {isLoading ? (
        <div className='flex h-full justify-center items-center'>
          <span className="loading loading-ring loading-lg text-primary-content"></span>
        </div>
      ) : (
        <ReactCardFlip flipDirection="horizontal" containerClassName='h-full' isFlipped={isFlipped}>
          <div className='h-full flex items-center justify-center text-primary-content font-bold'>
            <h1>Front</h1>
          </div>
          <div className='h-full flex items-center justify-center text-primary-content font-bold'>
            <h1>Back</h1>
          </div>
        </ReactCardFlip>
      )}
    </div>
  );
};

export default CardFlip;

CardFlip.propTypes = {
  isLoading: bool
};

CardFlip.defaultProps = {
  isLoading: false
};
