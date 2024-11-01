import { useNavigate } from "react-router-dom";
import {
  BackArrowIcon,
  EmptyStarIcon,
  FullStarIcon,
  UserAvatarIcon,
} from "../../../../assets/svg";
import { LButton } from "../../../../components";
import { currencyFormatter } from "../../../../utils/helper";
import React from "react";
import { IBasicMenu, IUser } from "../../../../types/model";
import dayjs from "dayjs";

export const UserDetails = () => {
  const navigate = useNavigate();
  const [listValue, setListValue] = React.useState<string>("general");
  const [user, setUser] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    const data = localStorage.getItem("U_OBJ");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      navigate(-1);
    }
  }, []);

  const navList: Omit<IBasicMenu, "icon">[] = [
    {
      name: "General Details",
      value: "general",
    },
    {
      name: "Documents",
      value: "document",
    },
    {
      name: "Bank Details",
      value: "bank",
    },
    {
      name: "Loans",
      value: "loan",
    },
    {
      name: "Savings",
      value: "saving",
    },
    {
      name: "App and Systems",
      value: "app",
    },
  ];

  const yearsOfEmployment = user
    ? dayjs().diff(dayjs(user.educationAndEmployment.dateOfEmployment), "year")
    : 0;

  return (
    <section className="_user_details_section">
      <div onClick={() => navigate(-1)} className="back_wrapper">
        <BackArrowIcon />
        Back to Users
      </div>

      <div className="title_wrapper">
        <h4 className="page_title">User Details</h4>
        <div className="btn_wrapper">
          <LButton fullWidth={false} variant="danger">
            Blacklist user
          </LButton>
          <LButton fullWidth={false} variant="primary_outline">
            Activate user
          </LButton>
        </div>
      </div>
      {user && (
        <React.Fragment>
          <div className="borrower_nav">
            <div className="basic_info">
              <div className="basic_1">
                <div className="avatar_wrapper">
                  <UserAvatarIcon />
                </div>
                <div className="name_wrapper">
                  <h5>{user.profile.name}</h5>
                  <small>LSQFf587g90</small>
                </div>
              </div>

              <div className="basic_2">
                <h6>User's Tier</h6>
                <div className="star_wrapper">
                  {user.tier === 1 && (
                    <>
                      <FullStarIcon />
                      <EmptyStarIcon />
                      <EmptyStarIcon />
                    </>
                  )}
                  {user.tier === 2 && (
                    <>
                      <FullStarIcon />
                      <FullStarIcon />
                      <EmptyStarIcon />
                    </>
                  )}
                  {user.tier === 3 && (
                    <>
                      <FullStarIcon />
                      <FullStarIcon /> <FullStarIcon />
                    </>
                  )}
                </div>
              </div>

              <div className="basic_3">
                <h5>{currencyFormatter(2000000)}</h5>
                <small>9912345678/Providus Bank</small>
              </div>
            </div>

            <ul className="nav_list">
              {navList.map(({ name, value }, id) => (
                <li
                  key={id}
                  onClick={() => setListValue(value)}
                  className={listValue === value ? "active" : ""}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <section className="details_section">
            <h4 className="title">Personal information</h4>

            <div className="info_row">
              <div className="info_wrapper">
                <small className="name">Full name</small>
                <p className="value">{user.profile.name}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Phone Number</small>
                <p className="value">{user.profile.phone}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Email Address</small>
                <p className="value">{user.email}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Bvn</small>
                <p className="value">{user.profile.bvn}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Gender</small>
                <p className="value">{user.profile.gender}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Marital status</small>
                <p className="value">{user.profile.maritalStatus}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Children</small>
                <p className="value">
                  {user.profile.children === 0 ? "none" : user.profile.children}
                </p>
              </div>
              <div className="info_wrapper">
                <small className="name">Type of residence</small>
                <p className="value">{user.profile.typeOfResidence}</p>
              </div>
            </div>

            <h4 className="title">Education and Employment</h4>

            <div className="info_row">
              <div className="info_wrapper">
                <small className="name">level of education</small>
                <p className="value">{user.educationAndEmployment.level}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">employment status</small>
                <p className="value">
                  {user.educationAndEmployment.employmentStatus}
                </p>
              </div>
              <div className="info_wrapper">
                <small className="name">sector of employment</small>
                <p className="value">
                  {user.educationAndEmployment.employmentSector}
                </p>
              </div>
              <div className="info_wrapper">
                <small className="name">Duration of employment</small>
                <p className="value">
                  {`${yearsOfEmployment} year${
                    yearsOfEmployment > 1 ? "s" : ""
                  }`}
                </p>
              </div>
              <div className="info_wrapper">
                <small className="name">office email</small>
                <p className="value">{user.officeEmail}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Monthly income</small>
                <p className="value">
                  {currencyFormatter(
                    user.educationAndEmployment.monthlyIncome - 1000
                  )}{" "}
                  -{" "}
                  {currencyFormatter(user.educationAndEmployment.monthlyIncome)}
                </p>
              </div>
              <div className="info_wrapper">
                <small className="name">loan repayment</small>
                <p className="value">
                  {currencyFormatter(user.educationAndEmployment.loan)}
                </p>
              </div>
            </div>

            <h4 className="title">Socials</h4>

            <div className="info_row">
              <div className="info_wrapper">
                <small className="name">Twitter</small>
                <p className="value">{user.socials.twitter}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Facebook</small>
                <p className="value">{user.socials.facebook}</p>
              </div>
              <div className="info_wrapper">
                <small className="name">Instagram</small>
                <p className="value">{user.socials.instagram}</p>
              </div>
            </div>

            <h4 className="title">Guarantor</h4>

            {user.guarantors.map((guarantor, id) => (
              <div key={id} className="info_row">
                <div className="info_wrapper">
                  <small className="name">Full name</small>
                  <p className="value">{guarantor.fullName}</p>
                </div>
                <div className="info_wrapper">
                  <small className="name">Phone Number</small>
                  <p className="value">{guarantor.phone}</p>
                </div>
                <div className="info_wrapper">
                  <small className="name">Email Address</small>
                  <p className="value">{guarantor.email}</p>
                </div>
                <div className="info_wrapper">
                  <small className="name">Relationship</small>
                  <p className="value">{guarantor.relationship}</p>
                </div>
              </div>
            ))}
          </section>
        </React.Fragment>
      )}
    </section>
  );
};
