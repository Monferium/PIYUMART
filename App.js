import './App.css';

function App() {
  return (
    <div className="app">
      <Productitemtemplate/>
    </div>
  );
}


const Productitemtemplate = () => {
  const productDataset = [
    {"ProductName": "Alpha", "ProductImage": "https://s3-alpha-sig.figma.com/img/542e/879d/532e14e24045e5de17fc5e5ee7444acd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkpWERz0-~bRlaY0xL4eSA~0eVsazj0RqCIXux0U1zaVPSYDVTAgdnb8gGh-yOyyW8nrt1TvQ0iyaHcYgImKYaXZa62SLysr9zvCkdXeph1jQV-kJuvopC2t6Msg33dDE7Sb9BTuCBpJt8Dhuuykp0Bwk8IlA6AFxG77IlLbrSgwTZBBq0NhiGrkysIAgK0JmvQaUomIYClTq-iK56-xk~llWsFDVjY5NBHFTNtLw0ZBGUxlnBWV53ndr~Ms0P7loHHbfItLEyVPexrUDoZs9FA53k7buT12v0X5EoJwORvzRDDL3QT7-cs4xoO4ERUeJengoh3Xn9c~qlvQ7RCVsA__", "ProductPrice": "120.00", "ProductTags": [4.50, 30]},

    {"ProductName": "Beta", "ProductImage": "https://s3-alpha-sig.figma.com/img/542e/879d/532e14e24045e5de17fc5e5ee7444acd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkpWERz0-~bRlaY0xL4eSA~0eVsazj0RqCIXux0U1zaVPSYDVTAgdnb8gGh-yOyyW8nrt1TvQ0iyaHcYgImKYaXZa62SLysr9zvCkdXeph1jQV-kJuvopC2t6Msg33dDE7Sb9BTuCBpJt8Dhuuykp0Bwk8IlA6AFxG77IlLbrSgwTZBBq0NhiGrkysIAgK0JmvQaUomIYClTq-iK56-xk~llWsFDVjY5NBHFTNtLw0ZBGUxlnBWV53ndr~Ms0P7loHHbfItLEyVPexrUDoZs9FA53k7buT12v0X5EoJwORvzRDDL3QT7-cs4xoO4ERUeJengoh3Xn9c~qlvQ7RCVsA__", "ProductPrice": "120.00", "ProductTags": [4.50, 30]},

    {"ProductName": "Gamma", "ProductImage": "https://s3-alpha-sig.figma.com/img/542e/879d/532e14e24045e5de17fc5e5ee7444acd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkpWERz0-~bRlaY0xL4eSA~0eVsazj0RqCIXux0U1zaVPSYDVTAgdnb8gGh-yOyyW8nrt1TvQ0iyaHcYgImKYaXZa62SLysr9zvCkdXeph1jQV-kJuvopC2t6Msg33dDE7Sb9BTuCBpJt8Dhuuykp0Bwk8IlA6AFxG77IlLbrSgwTZBBq0NhiGrkysIAgK0JmvQaUomIYClTq-iK56-xk~llWsFDVjY5NBHFTNtLw0ZBGUxlnBWV53ndr~Ms0P7loHHbfItLEyVPexrUDoZs9FA53k7buT12v0X5EoJwORvzRDDL3QT7-cs4xoO4ERUeJengoh3Xn9c~qlvQ7RCVsA__", "ProductPrice": "120.00", "ProductTags": [4.50, 30]},

    {"ProductName": "Karat", "ProductImage": "https://s3-alpha-sig.figma.com/img/542e/879d/532e14e24045e5de17fc5e5ee7444acd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkpWERz0-~bRlaY0xL4eSA~0eVsazj0RqCIXux0U1zaVPSYDVTAgdnb8gGh-yOyyW8nrt1TvQ0iyaHcYgImKYaXZa62SLysr9zvCkdXeph1jQV-kJuvopC2t6Msg33dDE7Sb9BTuCBpJt8Dhuuykp0Bwk8IlA6AFxG77IlLbrSgwTZBBq0NhiGrkysIAgK0JmvQaUomIYClTq-iK56-xk~llWsFDVjY5NBHFTNtLw0ZBGUxlnBWV53ndr~Ms0P7loHHbfItLEyVPexrUDoZs9FA53k7buT12v0X5EoJwORvzRDDL3QT7-cs4xoO4ERUeJengoh3Xn9c~qlvQ7RCVsA__", "ProductPrice": "120.00", "ProductTags": [4.50, 30]},

    {"ProductName": "Lambda", "ProductImage": "https://s3-alpha-sig.figma.com/img/542e/879d/532e14e24045e5de17fc5e5ee7444acd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkpWERz0-~bRlaY0xL4eSA~0eVsazj0RqCIXux0U1zaVPSYDVTAgdnb8gGh-yOyyW8nrt1TvQ0iyaHcYgImKYaXZa62SLysr9zvCkdXeph1jQV-kJuvopC2t6Msg33dDE7Sb9BTuCBpJt8Dhuuykp0Bwk8IlA6AFxG77IlLbrSgwTZBBq0NhiGrkysIAgK0JmvQaUomIYClTq-iK56-xk~llWsFDVjY5NBHFTNtLw0ZBGUxlnBWV53ndr~Ms0P7loHHbfItLEyVPexrUDoZs9FA53k7buT12v0X5EoJwORvzRDDL3QT7-cs4xoO4ERUeJengoh3Xn9c~qlvQ7RCVsA__", "ProductPrice": "120.00", "ProductTags": [4.50, 30]}
  ];
  const productCard = (product) => {
    return(
      <div className="product-card">
  <img src={product.ProductImage} alt={product.ProductName} className="product-image" />
  <div className="product-info">
    <h2 className="product-name">{product.ProductName}</h2>
    <p className="product-price">₱ {product.ProductPrice}</p>
    <div className="rating">
      <div className='star-rating'>
        <span>{product.ProductTags[0]}</span>
        <span className="star">★</span>
      </div>
      <div className="discount-tag">{product.ProductTags[1]}% off</div>
    </div>
    
  </div>
</div>
      );
  }

  return (
    <div className="product-grid">
      {productDataset.map((product, index) => (
        <div key={index}>
          {productCard(product)}
        </div>
      ))}
    </div>
  );
}
export default App;
