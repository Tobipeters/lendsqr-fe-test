import React from "react";

export interface ITableHeader<T = any> {
  field: string;
  headerName: string | React.JSX.Element;
  renderCell?: (params: { row: T }) => React.JSX.Element | React.ReactNode | string;
  hasFilter?: boolean;
  minWidth?: string;
  maxWidth?: string;
  handleFilter?: () => void;
  filterComponent?: React.JSX.Element
}

export interface ITableRow {
  id: string | number;
  [key: string]:any;
}

export interface IBasicMenu {
  icon?: React.JSX.Element;
  name: string;
  value: string;
}

export interface IUser {
  id: string;
  tier: number;
  email: string;
  status: number;
  profile: TProfile;
  socials: TSocial;
  username: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  guarantors: TGuarantor[];
  officeEmail: string;
  educationAndEmployment: TEducationAndEmployment;
}

type TProfile = {
  bvn: number;
  dob: string;
  name: string;
  address: string;
  children: number;
  organisation: string;
  maritalStatus: string;
  typeOfResidence: string;
  phone: number
  gender: string
};

type TEducationAndEmployment = {
  loan: number;
  level: string;
  monthlyIncome: number;
  dateOfEmployment: string | Date;
  employmentSector: string;
  employmentStatus: string;
};

type TGuarantor = {
  email: string;
  phone: string;
  fullName: string;
  relationship: string;
};

type TSocial = {
  twitter: string;
  facebook: string;
  instagram: string;
};
