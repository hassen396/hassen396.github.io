import { Container, Badge } from 'react-bootstrap';

const skills = ['.NET','C#','Git', 'PostgreSQL','React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'Agile Methodologies', 'Problem Solving'];

export default function Skills() {
  return (
    <Container id="skills" className="py-5 text-center">
      <h2>Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {skills.map(skill => (
          <Badge bg="primary" key={skill} className="p-2 fs-5">{skill}</Badge>
        ))}
      </div>
    </Container>
  );
}
