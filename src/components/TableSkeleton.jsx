const TableSkeleton = () => {
  return (
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
          <tr>
            <th><div className="skeleton h-4"></div>
            </th>
            <td><div className="skeleton h-4"></div>
            </td>
            <td><div className="skeleton h-4"></div>
            </td>
          </tr>
          <tr>
            <th><div className="skeleton h-4"></div>
            </th>
            <td><div className="skeleton h-4"></div>
            </td>
            <td><div className="skeleton h-4"></div>
            </td>
          </tr>
          <tr>
            <th><div className="skeleton h-4"></div>
            </th>
            <td><div className="skeleton h-4"></div>
            </td>
            <td><div className="skeleton h-4"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;