import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import HeroImage from "../assets/img/profile-icon.png"

const AboutPage = () => {
    return (
        <>
            <div className="about w-100">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={6} className="d-flex justify-content-center mb-4 mb-sm-0">
                            <img src={HeroImage} alt="Hero"/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h1 className="mb-4">About Me</h1>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aut, possimus eius
                                doloremque optio animi, pariatur eveniet ratione quos voluptatum voluptate dolore.
                                Velit ipsam ad, delectus reprehenderit voluptas itaque porro.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutPage