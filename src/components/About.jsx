import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/sddefault.jpg'; // Adjust the path as necessary

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col md={6}>
          <img src={image1} className="img-fluid rounded" alt="Me" />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p className='fs-5'>👋 Hi, This is Hassen, a passionate Software Engineering graduate from Debre Berhan University.

            Over the past five years, I’ve built a strong foundation in software development, with a special interest in backend technologies. I love solving real-world problems with clean, efficient code—and I'm always exploring better ways to build systems.

            🎓 For my final year project, I developed KirayZone, a rental property management platform built to simplify how people list and find rental properties. I also interned at INFONANS, where I gained practical experience working on real-life systems.

            💻 I enjoy working on challenging backend problems, APIs, and database design. I’m currently looking for backend development opportunities where I can learn from experienced teams, contribute meaningfully, and grow as a developer.

            Outside of code, I value curiosity, teamwork, and continuous learning. Let's connect and build something great together!</p>
        </Col>
      </Row>
    </Container>
  );
}
