import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Portofolio } from '../data/index';
import SpinnerCat from '../assets/img/kucing.png'
import { Container,Badge, Button } from 'react-bootstrap';

export const PortofolioPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [portfolioItem, setPortfolioItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { 
      const item = Portofolio.find(item => item.slug === slug);
      setPortfolioItem(item);
      setLoading(false);
    }, 1000);
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src={ SpinnerCat } alt="Loading" className="rotate-image" style={{ width: '100px', height: '100px' }} />
      </div>
    );
  }

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
      </Container>
    </div>
  );
};


