import { useState, useEffect } from "react";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  const [categoryItem, setCategoryItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (categoryItem.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === categoryItem.name;
      });
      setProjects(newProjects);
    }
  }, [categoryItem]);

  const handleClick = (e, index) => {
    setCategoryItem({ name: e.target.textContent });
    setActive(index);
    // console.log(e.target.textContent);
  };
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
