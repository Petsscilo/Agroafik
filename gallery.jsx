import React from 'react';

function Gallery() {
  const images = [
    'https://startup.com.ng/wp-content/uploads/2019/05/egg-distribution-business.jpg',
    'https://cdn.standardmedia.co.ke/images/saturday/lsrw4qpejozo85ng605f7dae8c2ca.jpg',
    'https://mmsplusng.com/wp-content/uploads/2020/05/Egg-Supply-Business.jpg',
    'https://www.poultryworld.net/app/uploads/2023/10/05140306/shutterstock_1420917856-1-1024x683.jpg',
  ];

  return (
    <div className="gallery">
      <h1>Our Farm in Pictures</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
