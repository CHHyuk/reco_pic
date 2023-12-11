import React from 'react';

const ImageComponent = ({ imageUrl, altText }) => (
  <div className='img_box'>
    <img src={imageUrl} alt={altText}></img>
  </div>
);

export default ImageComponent;
