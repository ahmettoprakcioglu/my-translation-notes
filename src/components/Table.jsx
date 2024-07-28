import { array, bool } from 'prop-types';
import TableSkeleton from './TableSkeleton';
import TableDetailsSection from './TableDetailsSection';

const Table = ({
  translationNotes,
  isLoading
}) => {
  return (
    <>
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
              {translationNotes.map((translationNote, index) => {
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
    </>
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
