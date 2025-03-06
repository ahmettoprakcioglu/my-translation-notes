import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import { getTranslationNotes } from '../services/apiNotes';
import { useState } from 'react';

const MyNotes = () => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 10;

  const {
    data: { data: translationNotes = [], totalCount = 0 } = {},
    isLoading
  } = useQuery({
    queryKey: ['translation-notes', page, pageSize, searchTerm],
    queryFn: () => getTranslationNotes({ page, pageSize, searchTerm }),
    keepPreviousData: true
  });

  return (
    <>
      <div>
        <Table 
          translationNotes={translationNotes} 
          isLoading={isLoading}
          totalCount={totalCount}
          page={page}
          setPage={setPage}
          onSearch={setSearchTerm}
        />
      </div>
    </>
  );
};

export default MyNotes;
