import {
  EyeIcon,
  MActiveUserIcon,
  MLoanUserIcon,
  MoreIcon,
  MSavingsUserIcon,
  MUserIcon,
  OutlineUserCheckIcon,
  OutlineUserTimeIcon,
} from "../../assets/svg";
import { LDataTable } from "../../components";
import { LDropdown } from "../../components/dropdown";
import { ITableHeader } from "../../types/model";

export const Users = () => {
  const metrics = [
    {
      bg: "#fce8ff",
      icon: <MUserIcon />,
      title: "Users",
      count: 2453,
    },
    {
      bg: "#eee8ff",
      icon: <MActiveUserIcon />,
      title: "Active Users",
      count: 2453,
    },
    {
      bg: "#feefec",
      icon: <MLoanUserIcon />,
      title: "Users with Loans",
      count: 12453,
    },
    {
      bg: "#ffebf0",
      icon: <MSavingsUserIcon />,
      title: "Users with Savings",
      count: 102453,
    },
  ];

  const moreList = [
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

  const tableHeaders: ITableHeader[] = [
    {
      headerName: "Organisation",
      field: "organisation",
      hasFilter: true,
    //   minWidth: "150",
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
    },
    {
      headerName: "Date joined",
      field: "date",
      hasFilter: true,
      minWidth: "150",
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
      maxWidth: "70",
      renderCell: () => (
        <LDropdown
          title={
            <div className="more_icon">
              <MoreIcon />
            </div>
          }
        >
          <ul className="more_list">
            {moreList.map(({ name, icon }, id) => (
              <li key={id}>
                {icon} {name}
              </li>
            ))}
          </ul>
        </LDropdown>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 1,
    },
    {
      id: 2,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 3,
    },
    {
      id: 3,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 2,
    },
    {
      id: 4,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 3,
    },
    {
      id: 5,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 4,
    },
    {
      id: 6,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 2,
    },
    {
      id: 7,
      organisation: "Lendsqr HQ",
      username: "Oluwatobi",
      email: "Iamoluwatobi@yopmail.com",
      phone: "08167764664",
      date: "2024-10-30T10:00:00",
      status: 3,
    },
  ];

  return (
    <section className="_users_section">
      <h3 className="page_title">Users</h3>

      <div className="metric_wrapper">
        {metrics.map(({ icon, title, count, bg }, id) => (
          <div key={id} className="metric_card">
            <div style={{ backgroundColor: bg }} className="icon_wrapper">
              {icon}
            </div>
            <h5 className="title">{title}</h5>
            <div className="count">{count}</div>
          </div>
        ))}
      </div>

      <LDataTable headers={tableHeaders} rows={rows} />
    </section>
  );
};
