import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import BuildingCard from "./BuildingCard";

const Projects = ({ projects, buildingProjects }) => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              As a passionate and insatiably curious learner, I thrive on the
              rush of excitement and challenge that comes with tackling new
              projects.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
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
                    {buildingProjects.map((buildingProject) => (
                      <BuildingCard
                        buildingProject={buildingProject}
                        key={buildingProject.id}
                      />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project) => (
                      <ProjectCard project={project} key={project.id} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
