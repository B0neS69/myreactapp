// src/components/ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  const styles = {
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={styles}>
      {text}
    </div>
  );
};

export default ExampleCarouselImage;
