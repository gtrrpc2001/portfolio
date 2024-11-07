import "./Box.scss";
import "./Carousel.scss";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { ProjectList } from "../../../../interface/ProjectList";
import { ProjectInfo } from "../info/ProjectInfo";

export const Box = ({
  className,
  title,
  time,
  people,
  work,
  imageList,
  borderRadius,
  descripttion,
  mainFunction,
  github,
  frontend,
  backend,
  db,
  deploy,
}: ProjectList) => {
  const [moveIndex, setMoveIndex] = useState(0);

  const handleChange = (index: number) => {
    setMoveIndex(index);
  };

  const githubCheck = github.includes("github");

  const renderSliders = imageList.map((m) => (
    <div key={m.id}>
      <img
        className={`${
          (m.alt == "EMR" || m.alt == "admin") && !m.url.includes("adminWeb2")
            ? "projectImg"
            : ""
        }`}
        src={m.url}
        alt={m.alt}
        style={{ width: `auto`, height: `auto`, borderRadius: borderRadius }}
      />
    </div>
  ));

  return (
    <div className="container_wrapper">
      <div className="container_title">{title}</div>
      <div className="container_time">
        {time}&nbsp;
        <span className="project_people">
          {`(${people}人 ${work ? "회사" : "팀"} 프로젝트)`}
        </span>
      </div>
      <div className="project_info">
        <div className="project_img">
          <Carousel
            className={className}
            showArrows={false}
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            emulateTouch={true}
            showIndicators={false}
            selectedItem={moveIndex}
            onChange={handleChange}
            showStatus={true}
          >
            {renderSliders}
          </Carousel>
        </div>
        <div className="project_descriptions">
          <div className="descripttion">{descripttion}</div>
          <ProjectInfo label="주요 기능" value={mainFunction} />
          <ProjectInfo
            label="GitHub"
            value={githubCheck ? github.split("//")[1] : github}
            link={githubCheck ? github : ""}
          />
          <ProjectInfo label="Frontend" value={frontend} />
          <ProjectInfo label="Backend" value={backend} />
          <ProjectInfo label="Database" value={db} />
          <ProjectInfo label="Deployment" value={deploy} />
        </div>
      </div>
    </div>
  );
};
