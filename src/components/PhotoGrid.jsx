import React from 'react';
import useFetch from '../hooks/useFetch';

const PhotoGrid = () => {
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <p>Loading premium content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Premium Products</h1>
      <div className="grid">
        {products && products.slice(0, 12).map((product) => (
          <div key={product.id} className="card">
            <div className="image-container">
              <img 
                src={product.images[0]?.replace(/[\[\]"]/g, '') || 'https://via.placeholder.com/600'} 
                alt={product.title} 
                className="product-image"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600'; }}
              />
              <div className="overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="info">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
