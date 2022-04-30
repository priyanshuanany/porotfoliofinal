import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/priyanshuanany/Apollo-247-Clone" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://nervous-swanson-7cdb5d.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitor site" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Apollo 24|7</h3>
            <p><a href="https://www.apollo247.com/">Apollo 24|7</a> is a single online platform where you have access to a wide range of services such as online pharmacy, online doctor consultations, and diagnostic lab tests at home.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScripts</li>
              <li>DOM</li>
              <li>LocalStorage</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Albin05/Bebodywise-frontend-U4" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Frontend" />
              </a>
              <a href="https://github.com/Albin05/bebodywise-backend" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Backend" />
              </a>
              <a href="https://bebodywisediversityclone.netlify.app/index.html" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitor site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>BE Bodywise</h3>
              <p><a href="https://bebodywise.com/">BE Bodywise</a> India's first Digital Health Clinic for Women. Bodywise is a wellness revolution designed to help you reclaim control over your health, drowning out the chaotic information you deal with everyday.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express</li>
                <li>Node</li>
                <li>JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}