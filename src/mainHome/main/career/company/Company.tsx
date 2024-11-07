import { PropsWithChildren } from "react";
import { Logo } from "../logo/Logo";
import "./Company.scss";
import { CompanyInfo } from "../../../../interface/Careeres";

export const Company = ({
  logo,
  title,
  time,
  language,
  tool,
  db,
  deploy,
  work,
  description,
  children,
}: CompanyInfo & PropsWithChildren) => {
  const getDescription = () => {
    const splitStr = description.split("\n");
    return splitStr.map((s) => (
      <span>
        {s}
        <br />
      </span>
    ));
  };

  return (
    <>
      <Logo logo={logo} />
      <div className="career_info">
        <div className="career_title">{title}</div>
        <div className="career_time">{time}</div>
        <div className="career_language">{`언어 : ${language}`}</div>
        {tool && <div className="career_language">{`Tools : ${tool}`}</div>}
        {db && <div className="career_db">{`디비 : ${db}`}</div>}
        {deploy && <div className="career_deploy">{`배포 : ${deploy}`}</div>}
        <div className="career_work">{`고용형태 : ${work}`}</div>
        <div className="career_description">{getDescription()}</div>
        {children}
      </div>
    </>
  );
};
