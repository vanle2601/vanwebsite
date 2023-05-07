import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { buildingProjects, projects } from "../config/data";

const Blog = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [buildingProject, setBuildingProject] = useState(null);

  useEffect(() => {
    let project = projects.find((project) => project.id === parseInt(id));

    if (project) {
      setProject(project);
    }
  }, []);

  useEffect(() => {
    let buildingProject = buildingProjects.find(
      (buildingProject) => buildingProject.id === parseInt(id)
    );

    if (buildingProject) {
      setBuildingProject(buildingProject);
    }
  }, []);

  return (
    <div className="blog-container">
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {project ? (
        <div className="blog-wrap">
          <header>
            <h1>{project.title}</h1>
            <div className="blog-subCategory">
              {project.subCategory.map((category, i) => (
                <img src={category} alt="built-with" />
              ))}
            </div>
          </header>
          <img src={project.imgUrl} alt="cover" />
          <div className="blog-desc">
            {project.feature.map((feature, i) => (
              <p>{feature}</p>
            ))}

            <a href={project.link} target="_blank" rel="noreferrer">
              <button type="button">View Here</button>
            </a>
          </div>
        </div>
      ) : (
        <p></p>
      )}

      {buildingProject ? (
        <div className="blog-wrap">
          <header>
            <h1>{buildingProject.title}</h1>
            <div className="blog-subCategory">
              {buildingProject.subCategory.map((category, i) => (
                <img src={category} alt="built-with" />
              ))}
            </div>
          </header>
          <img src={buildingProject.imgUrl} alt="cover" />
          <div className="blog-desc">
            {buildingProject.feature.map((feature, i) => (
              <p>{feature}</p>
            ))}

            <a href={buildingProject.link} target="_blank" rel="noreferrer">
              <button type="button">View Here</button>
            </a>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Blog;
