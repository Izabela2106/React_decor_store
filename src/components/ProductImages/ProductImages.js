import React, { useState, useEffect } from 'react';
import Wrapper from 'components/ProductImages/ProductImagesWrapper';

const ProductImages = ({ assets = [{ url: '' }] }) => {
  const [main, setMain] = useState(assets[0]);

  useEffect(() => {
    setMain(assets[0]);
  }, [assets]);

  return (
    <Wrapper>
      <div className="main">
        <img src={main.url} alt="main" />
      </div>
      <div className="gallery">
        {assets.map((item, index) => (
          <img
            src={item.url}
            alt="pic"
            className={item.url === main.url ? 'active' : null}
            onClick={() => {
              setMain(assets[index]);
            }}
            key={item.id}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
