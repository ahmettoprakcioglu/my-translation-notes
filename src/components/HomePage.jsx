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
        <div className='flex flex-col flex-1 justify-center items-center h-full'>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className='flex flex-col gap-4 md:grid grid-cols-3'>
          <div className="md:col-span-2 ...">
            <Form />
          </div>
          <div className="rounded-md md:...">
            <RandomWordGenerator translationNotes={translationNotes} />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;