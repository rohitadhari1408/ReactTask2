import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Template1 from '../template/template1'; // Adjust the import path as needed
import Template2 from '../template/template2'; // Adjust the import path as needed

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const template = location.state?.template || 'default'; // fallback if undefined

  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolios/${id}`);
        setPortfolio(res.data);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (!portfolio) return <p>Loading...</p>;

  // Render the correct template based on the "template" value
  if (template === 'modern') {
    return <Template1 portfolio={portfolio} />;
  } else {
    return <Template2 portfolio={portfolio} />;
  }
};

export default PortfolioDetailPage;
