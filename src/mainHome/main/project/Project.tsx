import { Title } from "../title/Title";
import "./Project.scss";
import link from "../../../assets/image/white-link.png";
import { Box } from "./box/Box";
import { Projects } from "../../../interface/ProjectList";
import { ScrollProps } from "../../../action/scroll";

export const Project = ({ scroll }: ScrollProps) => {
  const getProjectList = () => {
    return Projects.map((p) => {
      return (
        <Box
          className={p.className}
          title={p.title}
          time={p.time}
          people={p.people}
          work={p.work}
          imageList={p.imageList}
          borderRadius={p.borderRadius}
          descripttion={p.descripttion}
          mainFunction={p.mainFunction}
          github={p.github}
          frontend={p.frontend}
          backend={p.backend}
          db={p.db}
          deploy={p.deploy}
        />
      );
    });
  };

  return (
    <article className="project_article">
      <div className="project_content">
        <Title
          title="PROJECTS"
          link={link}
          defaultColor={false}
          scroll={scroll}
          id="Project"
        />
        <div className="project_container">{getProjectList()}</div>
      </div>
    </article>
  );
};
