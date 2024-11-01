import {
  EyeIcon,
  OutlineUserCheckIcon,
  OutlineUserTimeIcon,
  MoreIcon,
} from "../../../../assets/svg";
import { IBasicMenu, ITableHeader, IUser } from "../../../../types/model";
import { LDropdown, LDataTable } from "../../../../components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { USERS_URL } from "../../../../utils/route-url";
import dayjs from "dayjs";

interface IUserTableProps {
  rows: IUser[];
}

export const UserTable: React.FC<IUserTableProps> = ({ rows }) => {
  const navigate = useNavigate();

  const handleMoreList = (type: string, data: IUser) => {
    if (type === "view") {
      localStorage.setItem("U_OBJ", JSON.stringify(data));
      navigate(`${USERS_URL}/${data.id}`);
    }
  };

  const moreList: IBasicMenu[] = [
    {
      icon: <EyeIcon />,
      name: "View details",
      value: "view",
    },
    {
      icon: <OutlineUserTimeIcon />,
      name: "Blacklist User",
      value: "blacklist",
    },
    {
      icon: <OutlineUserCheckIcon />,
      name: "Activate User",
      value: "activate",
    },
  ];

  const tableHeaders: ITableHeader<IUser>[] = [
    {
      headerName: "Organisation",
      field: "organisation",
      hasFilter: true,
      minWidth: "170",
      renderCell: ({ row }) => <>{row.profile.organisation} </>,
    },
    {
      headerName: "Username",
      field: "username",
      hasFilter: true,
      minWidth: "150",
    },
    {
      headerName: "Email",
      field: "email",
      hasFilter: true,
      minWidth: "250",
    },
    {
      headerName: "Phone number",
      field: "phone",
      hasFilter: true,
      minWidth: "150",
      renderCell: ({ row }) => <>{row.profile.phone} </>,
    },
    {
      headerName: "Date joined",
      field: "date",
      hasFilter: true,
      minWidth: "200",
      renderCell: ({ row }) => (
        <>{dayjs(row.createdAt).format("MMM DD, YYYY hh:mm A")} </>
      ),
    },
    {
      headerName: "Status",
      field: "status",
      hasFilter: true,
      minWidth: "120",
      renderCell: (params) => (
        <>
          {params.row.status === 4 && (
            <div className="status danger_status">Blacklisted</div>
          )}
          {params.row.status === 3 && (
            <div className="status success_status">Active</div>
          )}
          {params.row.status === 2 && (
            <div className="status info_status">Pending</div>
          )}
          {params.row.status === 1 && (
            <div className="status inactive_status">In active</div>
          )}
        </>
      ),
    },
    {
      headerName: "",
      field: "action",
      hasFilter: false,
      maxWidth: "100",
      renderCell: ({ row }) => (
        <LDropdown
          title={
            <div className="more_icon">
              <MoreIcon />
            </div>
          }
        >
          <ul className="more_list">
            {moreList.map(({ name, icon, value }, id) => (
              <li key={id} onClick={() => handleMoreList(value, row)}>
                {icon} {name}
              </li>
            ))}
          </ul>
        </LDropdown>
      ),
    },
  ];

  return <LDataTable headers={tableHeaders} rows={rows} />;
};
