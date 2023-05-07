import React from "react";

import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Languages from "../components/Languages";
import {
  buildingProjects,
  languages,
  libraries,
  projects,
} from "../config/data";

const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects projects={projects} buildingProjects={buildingProjects} />
      <Languages languages={languages} libraries={libraries} />
    </div>
  );
};

export default Home;
