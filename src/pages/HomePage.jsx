import { Col, Container, Row } from "react-bootstrap"
import HeroImage from "../assets/img/profile-icon.png"
import { PortofolioCard } from '../components/PortofolioCard'
import { FaGithub, FaEnvelope, FaYoutube, FaLinkedin } from "react-icons/fa";


export const HomePage = () => {
  return (
    <>
      <div className="hero w-100 d-flex align-items-center ">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} sm={6} className="d-flex justify-content-center mb-4 mb-sm-0">
              <img src={HeroImage} alt="Hero" className="img-fluid rounded shadow" />
            </Col>
            <Col xs={12} sm={6} className="text-center text-sm-start">
              <h2 className="mb-3">Hi! I'm <span className="text-primary">Achmad Miftahudin.</span></h2>
              <h5 className="mb-1 text-muted">Web Developer</h5>
              <div className="icon-share d-flex gap-3 mb-4 justify-content-center justify-content-sm-start">
                <a href="https://www.linkedin.com/in/achmad-miftahudin-6365a8219/" target="_blank" rel="noopener noreferrer" className=" fs-4">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/myth2310" target="_blank" rel="noopener noreferrer" className=" fs-4">
                  <FaGithub />
                </a>
                <a href="mailto:achmadmiftahudin2310@gmail.com" className=" fs-4">
                  <FaEnvelope />
                </a>
                <a href="https://www.youtube.com/@achmadmiftahudin1245" target="_blank" rel="noopener noreferrer" className=" fs-4">
                  <FaYoutube />
                </a>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-primary px-4 py-2">Resume</button>
                <a href="#portofolio" className="btn btn-outline-primary px-4 py-2">My Project</a>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="portofolio w-100" id="portofolio">
        <Container>
          <h1 className="element">Portofolio Me</h1>
          <Row className="g-4 pb-4">
            <PortofolioCard />
          </Row>
        </Container>
      </div>
    </>
  )
}
