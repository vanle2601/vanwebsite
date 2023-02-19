import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import projImg1 from "../assets/img/gymbunno.png";
import projImg2 from "../assets/img/fonseka.png";
import projImg3 from "../assets/img/vanportfolio.png";
import projImg4 from "../assets/img/fakeflix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {

    const buildingProjects = [
        {
        title: "Streaming Platform",
        description: "API-based",
        imgUrl: projImg4,
        link: "https://fakeflix-clone.netlify.app/",
        },
    ];

    const projects = [
        {
        title: "Search Engine",
        description: "API-based",
        imgUrl: projImg1,
        link: "https://gymbunny.netlify.app/",
        },
        {
        title: "Landing Page",
        description: "Design & Development",
        imgUrl: projImg2,
        link: "",
        },
        {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
        link: "https://vvnle.com",
        },
    ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
            <Col size={12}>
                <h2>Projects</h2>
                <p>
                    Over the past three months, I worked on both self-initiated 
                    and client-based projects using React. 
                    <br></br>It is my passion to create performant and user-friendly products.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Launched</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Building</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <Row>
                        {
                          buildingProjects.map((buildingProject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...buildingProject}
                                />
                            )
                          })
                        }
                      </Row>
                </Tab.Pane>
                  
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                </Tab.Pane>
                    
                </Tab.Content>
                
                </Tab.Container>
            </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  )
}

export default Projects;