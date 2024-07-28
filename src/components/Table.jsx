import { useEffect, useState } from 'react';
import { array, bool } from 'prop-types';
import TableSkeleton from './TableSkeleton';
import TableDetailsSection from './TableDetailsSection';

const Table = ({
  translationNotes,
  isLoading
}) => {
  const [filteredNotes, setFilteredNotes] = useState(translationNotes);
  const [searchParam, setSearchParam] = useState('');

  const searchArray = (searchParam, array, keys) => {
    const lowerCaseSearchParam = searchParam.toLowerCase();

    return array.filter(item =>
      keys.some(key => 
        item[key] && item[key].toLowerCase().includes(lowerCaseSearchParam)
      )
    );
  };

  useEffect(() => {
    setFilteredNotes(translationNotes);
    setSearchParam('');
  }, [translationNotes]);

  return (
    <div className='flex flex-col gap-4'>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          value={searchParam}
          placeholder="Search"
          onChange={({ target: { value = '' } }) => {
            setFilteredNotes(searchArray(value, translationNotes, ['originalWord', 'translation']));
            setSearchParam(value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Original Word</th>
                <th>Translation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotes.map((translationNote, index) => {
                const { originalWord, translation, id } = translationNote;
                return (
                  <tr key={id}>
                    <th>{index + 1}</th>
                    <td>{originalWord}</td>
                    <td>{translation}</td>
                    <td><TableDetailsSection translationNote={translationNote} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;

Table.propTypes = {
  translationNotes: array,
  isLoading: bool
};

Table.defaultProps = {
  translationNotes: [],
  isLoading: false
};
