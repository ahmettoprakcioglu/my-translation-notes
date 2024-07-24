import { array, bool } from 'prop-types';
import TableSkeleton from './TableSkeleton';

const Table = ({
  translationNotes,
  isLoading
}) => {
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Original Word</th>
                <th>Translation</th>
              </tr>
            </thead>
            <tbody>
              {translationNotes.map(({ originalWord, translation, id }, index) => {
                return (
                  <tr key={id}>
                    <th>{index + 1}</th>
                    <td>{originalWord}</td>
                    <td>{translation}</td>
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
