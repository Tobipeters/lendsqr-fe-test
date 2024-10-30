export interface ITableHeader {
  field: string;
  headerName: string | React.JSX.Element;
  renderCell?: (
    params: [key: string]
  ) => React.JSX.Element | React.ReactNode | string;
  hasFilter?: boolean;
  minWidth?: string;
  maxWidth?: string;
  handleFilter?: () => void;
}

export interface ITableRow {
  id: string | number;
  [key: string]: string | number | boolean;
}
