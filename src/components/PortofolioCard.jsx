import React from 'react'
import { Col, Card, Badge } from "react-bootstrap"
import { Portofolio } from '../data/index'
import { Link } from 'react-router'


export const PortofolioCard = () => {

    const getProgressColor = (progress) => {
        switch (progress) {
          case 'Development': return 'warning';
          case 'Completed': return 'success';
          case 'Planning': return 'info';
          default: return 'secondary';
        }
      };

    return (
        <>
            {Portofolio.map((data) => (
                <Col xs={12} md={4} key={data.id}>
                    <Card style={{ width: '100%', height:"600px" }}>
                        <Card.Img
                            variant="top"
                            width="400px"
                            height="400px"
                            src={data.image}
                            alt={data.title}
                        />
                        <Card.Body>
                            <Badge bg={getProgressColor(data.progress)} className="mb-2">{data.progress}</Badge>
                            <Card.Title className='fw-bold mb-2'>{data.title}</Card.Title>
                            {/* <Card.Text>{data.slug}</Card.Text> */}
                            <Link to={`/portofolio/${data.slug}`}>Lihat Selengkapnya...</Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    )
}
