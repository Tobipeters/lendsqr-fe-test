import React from "react";
import { FilterIcon } from "../../assets/svg";
import { ITableHeader, ITableRow } from "../../types/model";
import { LDropdown } from "../dropdown";
import { LInput } from "../input";
import { LButton } from "../button";
import { Pagination } from "../pagination";
import { LSelect } from "../select";

interface IDataTableProps<T extends ITableRow> {
  headers: ITableHeader[];
  rows: T[];
}

export const LDataTable = <T extends ITableRow>({
  headers,
  rows,
}: IDataTableProps<T>) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const totalPages = Math.ceil(rows.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentRows = rows.slice(startIdx, startIdx + pageSize);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="_table_container">
      <div className="_table_wrapper">
        <table className="data_table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header.field}
                  style={{
                    minWidth: `${header.minWidth}px`,
                    maxWidth: `${header.maxWidth}px`,
                    flex: 1,
                  }}
                >
                  {header.headerName}
                  {header.hasFilter && (
                    <LDropdown
                      title={
                        <span
                          onClick={header.handleFilter}
                          className="filter_icon"
                        >
                          <FilterIcon />
                        </span>
                      }
                    >
                      <form className="filter_form">
                        <div className="form_group">
                          <label>Organisation</label>
                          <LSelect
                            fullWidth
                            name="organisation"
                            placeholder="Organisation"
                            _size="md"
                          />
                        </div>

                        <div className="form_group">
                          <label>Username</label>

                          <LInput
                            fullWidth
                            type="text"
                            name="username"
                            placeholder="User"
                            _size="md"
                          />
                        </div>
                        <div className="form_group">
                          <label>Email</label>
                          <LInput
                            fullWidth
                            type="email"
                            name="email"
                            placeholder="Email"
                            _size="md"
                          />
                        </div>
                        <div className="form_group">
                          <label>Date</label>
                          <LInput
                            fullWidth
                            type="date"
                            name="date"
                            placeholder="Date"
                            _size="md"
                          />
                        </div>
                        <div className="form_group">
                          <label>Phone number</label>
                          <LInput
                            fullWidth
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            _size="md"
                          />
                        </div>

                        <div className="form_group">
                          <label>Status</label>
                          <LSelect
                            fullWidth
                            name="status"
                            placeholder="Status"
                            _size="md"
                          />
                        </div>

                        <div className="btn_wrapper">
                          <LButton
                            fullWidth
                            variant="secondary_outline"
                            size="md"
                          >
                            Reset
                          </LButton>
                          <LButton fullWidth size="md">
                            Filter
                          </LButton>
                        </div>
                      </form>
                    </LDropdown>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id}>
                {headers.map((header) => (
                  <td
                    key={header.field}
                    style={{
                      minWidth: `${header.minWidth}px`,
                      maxWidth: `${header.maxWidth}px`,
                      flex: 1,
                    }}
                  >
                    {header.renderCell
                      ? header.renderCell({ row })
                      : row[header.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination_controls">
        <label>
          Showing
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          out of {rows.length}
        </label>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
