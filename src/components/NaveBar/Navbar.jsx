import { Container, Nav, Navbar as BSNavbar, Button } from 'react-bootstrap';
import { useTheme } from '../../ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <BSNavbar expand="lg" className={`navbar-wrapper py-3 ${darkMode ? '' : 'bg-light'}`} sticky="top">
      <Container fluid className="d-flex justify-content-between align-items-center">

        {/* Left: Logo Pill */}
        <div className={`nav-pill rounded-pill px-4 py-2 ${darkMode ? 'pill-dark' : 'pill-light'}`}>
          <BSNavbar.Brand href="#" className="m-0 fw-bold text-primary">
            Hassen
          </BSNavbar.Brand>
        </div>

        {/* Toggle Button (shows on small screens) */}
        <BSNavbar.Toggle aria-controls="navbar-collapse" />

        {/* Collapsible Nav Items */}
        <BSNavbar.Collapse id="navbar-collapse" className="justify-content-center">
          <div className={`nav-pill nav-center rounded-pill px-3 py-2 my-2 my-lg-0 ${darkMode ? 'pill-dark' : 'pill-light'}`}>
            <Nav className="d-flex align-items-center gap-3 px-2 flex-column flex-lg-row">
              <Nav.Link href="#home" className="fw-semibold">Home</Nav.Link>
              <Nav.Link href="#about" className="fw-semibold">About</Nav.Link>
              <Nav.Link href="#skills" className="fw-semibold">Skills</Nav.Link>
              <Nav.Link href="#projects" className="fw-semibold">Works</Nav.Link>
              <Nav.Link href="#contact" className="btn-light fw-semibold rounded-pill px-4">
                Let’s talk
              </Nav.Link>
              <Button
                onClick={toggleTheme}
                variant={darkMode ? 'outline-light' : 'outline-dark'}
                size="sm"
                className="rounded-circle"
                title="Toggle Theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </Button>
            </Nav>
          </div>
        </BSNavbar.Collapse>

        {/* Right: CV Button Pill (always visible) */}
        <div className={`nav-pill rounded-pill px-3 py-2 d-none d-lg-flex align-items-center gap-2 ${darkMode ? 'pill-dark' : 'pill-light'}`}>
          <Button
            href="/Hassen_Muhammed_CV_2025.pdf"
            download
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            size="sm"
            className="rounded-pill"
          >
            Download CV
          </Button>
        </div>

      </Container>
    </BSNavbar>
  );
}
