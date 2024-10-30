import React from "react";
import {
  BadgePercentIcon,
  BankBuildingIcon,
  BriefCaseIcon,
  ChartIcon,
  ClipboardListIcon,
  CoinsIcon,
  DashboardIcon,
  GalaxyIcon,
  HandShakeIcon,
  LoanInHandIcon,
  MoneyBagIcon,
  PiggyBankIcon,
  ScrollIcon,
  SliderIcon,
  ThreeUsersIcon,
  TransactionIcon,
  TwoUsersIcon,
  TyreIcon,
  UserCheckIcon,
  UserSettingIcon,
  UserTimesIcon,
} from "../assets/svg";
import { DASHBOARD_URL, USERS_URL } from "./route-url";

interface INavList {
  name: string;
  children: IChildren[];
}

interface IChildren {
  name: string;
  link: string;
  icon: React.JSX.Element;
}

export const navLists: INavList[] = [
  {
    name: "",
    children: [
      {
        name: "Dashboard",
        link: DASHBOARD_URL,
        icon: <DashboardIcon />,
      },
    ]
  },
  {
    name: "Customer",
    children: [
      {
        name: "Users",
        link: USERS_URL,
        icon: <TwoUsersIcon />,
      },
      {
        name: "Guarantors",
        link: "",
        icon: <ThreeUsersIcon />,
      },
      {
        name: "Loans",
        link: "",
        icon: <MoneyBagIcon />,
      },
      {
        name: "Decision Models",
        link: "",
        icon: <HandShakeIcon />,
      },
      {
        name: "Savings",
        link: "",
        icon: <PiggyBankIcon />,
      },
      {
        name: "Loan Requests",
        link: "",
        icon: <LoanInHandIcon />,
      },
      {
        name: "Whitelist",
        link: "",
        icon: <UserCheckIcon />,
      },
      {
        name: "Karma",
        link: "",
        icon: <UserTimesIcon />,
      },
    ],
  },
  {
    name: "BUSINESSES",
    children: [
      {
        name: "Organization",
        link: "",
        icon: <BriefCaseIcon />,
      },
      {
        name: "Loan Products",
        link: "",
        icon: <LoanInHandIcon />,
      },
      {
        name: "Savings Products",
        link: "",
        icon: <BankBuildingIcon />,
      },
      {
        name: "Fees and Charges",
        link: "",
        icon: <CoinsIcon />,
      },
      {
        name: "Transactions",
        link: "",
        icon: <TransactionIcon />,
      },
      {
        name: "Services",
        link: "",
        icon: <GalaxyIcon />,
      },
      {
        name: "Service Account",
        link: "",
        icon: <UserSettingIcon />,
      },
      {
        name: "Settlements",
        link: "",
        icon: <ScrollIcon />,
      },
      {
        name: "Reports",
        link: "",
        icon: <ChartIcon />,
      },
    ],
  },
  {
    name: "SETTINGS",
    children: [
      {
        name: "Preferences",
        link: "",
        icon: <SliderIcon />,
      },
      {
        name: "Fees and Pricing",
        link: "",
        icon: <BadgePercentIcon />,
      },
      {
        name: "Audit Logs",
        link: "",
        icon: <ClipboardListIcon />,
      },
      {
        name: "Systems Messages",
        link: "",
        icon: <TyreIcon />,
      },
    ],
  },
];
