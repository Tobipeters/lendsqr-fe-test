import {
  MActiveUserIcon,
  MLoanUserIcon,
  MSavingsUserIcon,
  MUserIcon,
} from "../../assets/svg";
import { UserTable } from "./components";
import { getUsers } from "../../services";
import React from "react";
import { IUser } from "../../types/model";
import { toast } from "react-toastify";
import { currencyFormatter } from "../../utils/helper";

export const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
        setIsLoading(false);
      } catch (err) {
        toast.error("An error occured, please try again.");
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
            <div className="count">{currencyFormatter(count).substring(1)}</div>
          </div>
        ))}
      </div>

      {isLoading ? "Data loading..." : <UserTable rows={users} />}
    </section>
  );
};
