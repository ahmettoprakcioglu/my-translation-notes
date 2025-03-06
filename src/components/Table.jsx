import { useEffect, useState, useMemo } from 'react';
import { array, bool, number, func } from 'prop-types';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import TableSkeleton from './TableSkeleton';
import TableDetailsSection from './TableDetailsSection';
import { useQueryClient } from '@tanstack/react-query';
import debounce from 'lodash/debounce';

const Table = ({
  translationNotes,
  isLoading,
  totalCount,
  page,
  setPage,
  onSearch
}) => {
  const queryClient = useQueryClient();
  const [searchParam, setSearchParam] = useState('');
  const [pageInput, setPageInput] = useState('');

  const columns = useMemo(() => [
    {
      accessorFn: (_, index) => (page * 10) + index + 1,
      header: '#',
      size: 50,
    },
    {
      accessorKey: 'originalWord',
      header: 'Original Word',
    },
    {
      accessorKey: 'translation',
      header: 'Translation',
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <TableDetailsSection translationNote={row.original} />
      ),
    },
  ], [page]);

  const table = useReactTable({
    data: translationNotes,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount: Math.ceil(totalCount / 10),
    state: {
      pagination: {
        pageIndex: page,
        pageSize: 10,
      },
    },
    onPaginationChange: updater => {
      const newPageIndex = typeof updater === 'function' 
        ? updater({ pageIndex: page, pageSize: 10 }).pageIndex 
        : updater.pageIndex;
      setPage(newPageIndex);
    },
    manualPagination: true,
  });

  const debouncedSearch = useMemo(
    () =>
      debounce((searchValue) => {
        setPage(0);
        onSearch(searchValue);
      }, 300),
    [setPage, onSearch]
  );

  const handleSearch = ({ target: { value } }) => {
    setSearchParam(value);
    debouncedSearch(value);
  };

  const handlePageInputChange = (e) => {
    let value = e.target.value;
    const maxPage = table.getPageCount();
    
    if (value === '') {
      setPageInput(value);
      return;
    }

    value = parseInt(value);

    if (value < 1) value = 1;
    if (value > maxPage) value = maxPage;
    
    setPageInput(value);
  };

  const handlePageInputSubmit = (e) => {
    e?.preventDefault();
    if (!pageInput) return;
    
    const pageNumber = Number(pageInput) - 1;
    setPage(pageNumber);
    setPageInput('');
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className='flex flex-col gap-4'>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          value={searchParam}
          placeholder="Search"
          onChange={handleSearch}
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
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="join mt-4 flex justify-center items-center gap-2">
            <button
              className="join-item btn btn-sm"
              onClick={() => setPage(0)}
              disabled={!table.getCanPreviousPage()}
            >
              «
            </button>
            <button
              className="join-item btn btn-sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              ‹
            </button>

            {/* Sayfa numarası input'u ve toplam sayfa */}
            <div className="join-item flex items-center gap-2">
              <form onSubmit={handlePageInputSubmit} className="flex items-center gap-2">
                <span>Page</span>
                <input
                  type="number"
                  value={pageInput}
                  onChange={handlePageInputChange}
                  onBlur={() => handlePageInputSubmit()}
                  className="input input-bordered input-sm w-16 px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder={`${page + 1}`}
                />
              </form>
              <span>of {table.getPageCount()}</span>
            </div>

            <button
              className="join-item btn btn-sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              ›
            </button>
            <button
              className="join-item btn btn-sm"
              onClick={() => setPage(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

Table.propTypes = {
  translationNotes: array,
  isLoading: bool,
  totalCount: number,
  page: number,
  setPage: func,
  onSearch: func
};

Table.defaultProps = {
  translationNotes: [],
  isLoading: false,
  totalCount: 0,
  page: 0,
  setPage: () => {},
  onSearch: () => {}
};
