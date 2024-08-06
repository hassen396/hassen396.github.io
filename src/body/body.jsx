import "./body.css";
import bgImage from "../assets/images/bg-image.jpg";
import PortfolioImage from "../assets/images/IMG_20240506_113151_661.jpg";
("../assets/images/portfolio-image.jpg");
import image from "../assets/images/IMG_20240506_113151_661.jpg";
import { useState, useEffect } from "react";

const texts = ["Software Engineer", "Developer", "Frontend Designer"];
const Main = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setDisplayText(currentText.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before starting deletion
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, textIndex]);

  return (
    <>
      <div className='intro-content-container'>
        <div className="intro-content">
          <div className="intro-image">
            <div className="intro-image-container">
              <img
                className="header-image"
                src={image}
                alt="this is my intro image"
              />
            </div>
          </div>
          <div className="intro-text">
            <div className="header-title">Hi this is Hassen</div>
            <div className="header-subtitle gradient-text">
              I&#8217;m a <span id="typing-effect">{displayText}</span>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="about">
          <div className="left">
            <img className='about-img' src={PortfolioImage} alt="this is an image" />
          </div>
          <div className="right">
            <h1>About Me</h1>
            <p>
              Hi, I&#39;m Hassen Muhammed, a passionate coder and a student at
              Debre Berhan University. My coding journey began in 2021 with C++,
              and since then, I&#39;ve expanded my skills to include Java and
              Python. I am proficient in web development technologies such as
              HTML, CSS, and JavaScript, and I enjoy creating dynamic user
              interfaces with React. Coding is not just a skill but a passion
              that drives me to continuously learn and innovate. Thank you for
              visiting my portfolio. Let&#39;s build something amazing together!
            </p>
          </div>
        </div>
        <div className="Service">
          <div className="left">
            <img src={bgImage} alt="this is an image" />
          </div>
          <div className="right">
            <h1>My Services</h1>
            <p>
              <h2>Web Design</h2> Creating visually stunning and user-friendly
              websites tailored to your needs.
              <h2>Responsive Design</h2> Ensuring your website looks great on
              all devices, from desktops to mobile phones, for the best user
              experience.
              <h2>Landing Pages</h2>
              Designing and developing high-converting landing pages that
              effectively support your marketing campaigns.
              <h2>Redesign Services</h2> Updating and modernizing existing
              websites to enhance usability and aesthetics, giving them a fresh
              and contemporary look.
              <h2>User Interface Design</h2> Crafting intuitive and visually
              appealing user interfaces that enhance user engagement and
              satisfaction.
              <h2>Front-End Development</h2>
              Building responsive and interactive user interfaces using HTML,
              CSS, JavaScript, and modern frameworks like React to bring your
              designs to life.
            </p>
          </div>
        </div>

        <div className="Resume">
          <div className="left">
            <img src={bgImage} alt="this is an image" />
          </div>
          <div className="right">
            <h1>education</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              autem corporis nisi hic modi, soluta nulla natus cum magni.
              Suscipit ratione esse vitae, possimus obcaecati reprehenderit
              laborum quaerat exercitationem quidem. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ut fuga, nesciunt, saepe culpa
              deleniti illo, exercitationem impedit laboriosam veniam libero hic
              non quae aspernatur voluptate labore dolorum facilis nam
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Libero, magnam distinctio. Aut ratione eligendi amet,
              facere, veritatis suscipit laborum iste tenetur illum vero
            </p>
          </div>
        </div>

        <div className="Portfolio">
          <div className="left">
            <img src={bgImage} alt="this is an image" />
          </div>
          <div className="right">
            <h1>some header goes here</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              autem corporis nisi hic modi, soluta nulla natus cum magni.
              Suscipit ratione esse vitae, possimus obcaecati reprehenderit
              laborum quaerat exercitationem quidem. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ut fuga, nesciunt, saepe culpa
              deleniti illo, exercitationem impedit laboriosam veniam libero hic
              non quae aspernatur voluptate labore dolorum facilis nam
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Libero, magnam distinctio. Aut ratione eligendi amet,
              facere, veritatis suscipit laborum iste tenetur illum vero
            </p>
          </div>
        </div>

        <div className="Contact">
          <div className="left">
            <img src={bgImage} alt="this is an image" />
          </div>
          <div className="right">
            <h1>some header goes here</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              autem corporis nisi hic modi, soluta nulla natus cum magni.
              Suscipit ratione esse vitae, possimus obcaecati reprehenderit
              laborum quaerat exercitationem quidem. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ut fuga, nesciunt, saepe culpa
              deleniti illo, exercitationem impedit laboriosam veniam libero hic
              non quae aspernatur voluptate labore dolorum facilis nam
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Libero, magnam distinctio. Aut ratione eligendi amet,
              facere, veritatis suscipit laborum iste tenetur illum vero
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
