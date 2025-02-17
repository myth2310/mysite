import { Col, Container, Row } from "react-bootstrap"
import HeroImage from "../assets/img/profile-icon.png"
import { PortofolioCard } from '../components/PortofolioCard'


export const HomePage = () => {
  return (
    <>
      <div className="hero w-100 d-flex align-items-center ">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={6} className="d-flex justify-content-center mb-4 mb-sm-0">
              <img src={HeroImage} alt="Hero" className="img-fluid rounded shadow" />
            </Col>
            <Col xs={12} sm={6} className="text-center text-sm-start">
              <h2 className="mb-3">Hi! I'm <span className="text-primary">Achmad Miftahudin.</span></h2>
              <h5 className="mb-4 text-muted">Web Developer</h5>
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
