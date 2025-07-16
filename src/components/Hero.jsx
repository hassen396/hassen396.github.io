import { Container } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';

export default function Hero() {
    const { darkMode } = useTheme();
  return (
      <div className="py-5 d-flex flex-row align-" id="home">
          <Container className="text-center">
              <span className={`fs-6 text-start ${darkMode ? "intro-custom-dark-color" : "text-dark"}`}>Hello, I'm</span>
              <h1 className={`${darkMode ? "custom-darkMode-text" : ""}`}>Hassen Muhammed.</h1>
              <p className={`lead fs-2 ${darkMode ? "text-light" : ""}`}>A passionate developer building web apps with React & .NET</p>
          </Container>
    </div>
  );
}
