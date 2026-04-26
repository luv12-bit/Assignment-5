import React from 'react';
import useFetch from '../hooks/useFetch';

const PhotoGrid = () => {
  // Using my custom hook to get products from the API
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  // Simple loading state
  if (loading) {
    return <div className="message">Loading products... Please wait.</div>;
  }

  // Simple error state
  if (error) {
    return <div className="message error">Error: {error}</div>;
  }

  return (
    <div className="grid-wrapper">
      <h1>My Product Collection</h1>
      <div className="photo-grid">
        {/* I'm limiting to 12 items so the page isn't too long */}
        {products && products.slice(0, 12).map((item) => (
          <div key={item.id} className="photo-card">
            <img 
              src={item.images[0]} 
              alt={item.title} 
              // Simple fallback if image fails to load
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
            />
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
