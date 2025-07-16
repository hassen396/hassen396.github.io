import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';
import hakunaMatata from '../assets/hakuna-metata.png'; // Adjust the path as necessary


const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project.',
    link: '#',
    img: hakunaMatata
  },
  {
    title: 'Project Two',
    description: 'Another project description.',
    link: '#',
    img: hakunaMatata
  }
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card className={`shadow-sm ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant={darkMode ? 'outline-light' : 'primary'}
                  href={project.link}
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
