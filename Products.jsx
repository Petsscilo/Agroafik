import React from 'react';

function Products() {
  return (
    <div className="products">
      <h1>Our Egg Products</h1>
      <div className="product-list">
        <div className="product-card">
          <img src="https://cdn.standardmedia.co.ke/images/saturday/lsrw4qpejozo85ng605f7dae8c2ca.jpg" alt="Eggs pack" />
          <h3>Crate of Fresh Eggs</h3>
          <p>₦2,000 per crate – carefully packaged & freshly collected.</p>
        </div>
        <div className="product-card">
          <img src="https://www.poultryworld.net/app/uploads/2023/10/05140306/shutterstock_1420917856-1-1024x683.jpg" alt="Bulk eggs" />
          <h3>Bulk Orders</h3>
          <p>Best for restaurants, bakeries & hotels. Custom pricing available.</p>
        </div>
        <div className="product-card">
          <img src="https://www.researchgate.net/profile/Mahmud-Shittu/publication/318683764/figure/fig2/AS:668323983757320@1536355249474/Packaged-egg-ready-for-marketing.png" alt="Packaged eggs" />
          <h3>Custom Packaging</h3>
          <p>Eggs delivered in branded or tamper-proof packages. MOQ applies.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
