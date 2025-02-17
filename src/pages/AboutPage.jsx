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
                            <h1 className="MB-1">About Me</h1>
                            <p className="text-muted">
                                Perkenalkan, nama saya Mifta. Saya lulusan Politeknik Harapan Bersama jurusan Teknik Informatika dan sebagai Web Developer. Saya familiar dengan framework Laravel dan Flask, serta sangat tertarik dan menyukai project berbasis AI.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutPage