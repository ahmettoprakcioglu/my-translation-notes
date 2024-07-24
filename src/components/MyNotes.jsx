import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import { getTranslationNotes } from '../services/apiNotes';

const MyNotes = () => {
  const {
    data: translationNotes = [],
    isLoading
  } = useQuery({
    queryKey: ['translation-notes'],
    queryFn: getTranslationNotes
  });

  return (
    <div>
      <Table translationNotes={translationNotes} />
    </div>
  );
};

export default MyNotes;
