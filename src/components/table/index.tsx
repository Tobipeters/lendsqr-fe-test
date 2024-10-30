import React from "react";
import { FilterIcon } from "../../assets/svg";
import { ITableHeader, ITableRow } from "../../types/model";
import { LDropdown } from "../dropdown";
import { LInput } from "../input";
import { LButton } from "../button";

interface IDataTableProps {
  headers: ITableHeader[];
  rows: ITableRow[];
}

export const LDataTable: React.FC<IDataTableProps> = ({ headers, rows }) => {
  const [isFilter, setIsFilter] = React.useState<boolean>(false);

  return (
    <div className="_table_container">
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

                      <div className="btn_wrapper">
                        <LButton fullWidth variant="secondary_outline" size="md">
                          Reset
                        </LButton>
                        <LButton fullWidth size="md">Filter</LButton>
                      </div>
                    </form>
                  </LDropdown>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
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
  );
};
