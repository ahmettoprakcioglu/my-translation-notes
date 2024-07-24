import { useQuery } from '@tanstack/react-query';
import Form from './Form';
import RandomWordGenerator from './RandomWordGenerator';
import { getTranslationNotes } from '../services/apiNotes';

const HomePage = () => {
  const {
    data: translationNotes = [],
    isLoading
  } = useQuery({
    queryKey: ['translation-notes'],
    queryFn: getTranslationNotes
  });

  return (
    <>
      {isLoading ? (
        <div className='flex flex-col flex-1 justify-center items-center'>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className='flex flex-col gap-4 h-full md:grid grid-cols-3 md:h-auto'>
          <div className="h-1/2 md:col-span-2 h-auto ...">
            <Form />
          </div>
          <div className="h-1/2 rounded-md md:h-auto ...">
            <RandomWordGenerator translationNotes={translationNotes} />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;