import React from 'react';
import { useParams } from 'react-router';
import { Portofolio } from '../data/index';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaPhp, FaLaravel, FaServer, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaDatabase as FaMysql, FaFlask } from 'react-icons/fa';

const toolIcons = {
  PHP: <FaPhp className="text-4xl text-blue-500" />,
  Laravel: <FaLaravel className="text-4xl text-red-500" />,
  XAMPP: <FaServer className="text-4xl text-orange-500" />,
  React: <FaReact className="text-4xl text-cyan-500" />,
  Python: <FaPython className="text-4xl text-yellow-500" />,
  JavaScript: <FaJsSquare className="text-4xl text-yellow-400" />,
  HTML: <FaHtml5 className="text-4xl text-orange-600" />,
  CSS: <FaCss3Alt className="text-4xl text-blue-600" />,
  NodeJS: <FaNodeJs className="text-4xl text-green-600" />,
  Database: <FaDatabase className="text-4xl text-indigo-500" />,
  Git: <FaGitAlt className="text-4xl text-red-600" />,
  Docker: <FaDocker className="text-4xl text-blue-400" />,
  MySQL: <FaMysql className="text-4xl text-blue-600" />,
  Flask: <FaFlask className="text-4xl text-gray-600" />
};

export const PortofolioPage = () => {
  const { slug } = useParams();
  const portfolioItem = Portofolio.find(item => item.slug === slug);

  if (!portfolioItem) {
    return <h2 className="text-center mt-5">Portofolio tidak ditemukan</h2>;
  }

  const getProgressColor = (progress) => {
    switch (progress) {
      case 'Development': return 'warning';
      case 'Completed': return 'success';
      case 'Planning': return 'info';
      default: return 'secondary';
    }
  };

  console.log(portfolioItem.image);
  return (
    <div className="detail-portofolio">
      <Container>
        <img src={portfolioItem.image} alt={portfolioItem.title} className="portofolio-image w-full mb-6 rounded-lg shadow-lg" />
        <h3 className="text-3xl font-bold mb-2 mt-3">{portfolioItem.title}</h3>
        <Badge bg={getProgressColor(portfolioItem.progress)} className="mb-4">{portfolioItem.progress}</Badge>
        <p className="text-lg mb-3">{portfolioItem.desc}</p>
        {portfolioItem.website && (
          <Button variant="outline-primary" href={portfolioItem.website} target="_blank">Visit Website</Button>
        )}
        <Row className="mt-4">
          {portfolioItem.tools.map((tool, index) => (
            <Col key={index} md={2} sm={4} xs={6} className="mb-4">
              <Card>
                <Card.Body className="text-center">
                  {toolIcons[tool] || <FaServer className="text-4xl text-gray-500" />}
                  <article className="mt-3 text-xl font-semibold">{tool}</article>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
