
import React from 'react';


import '../Gallery.css';

export function GalleryUser(props) {


  return (
    <div className="gallery">
      {props.photo.map((image, index) => (
         <img
          key={index}
          className="gallery__item"
          src={ `http://localhost:5000/${image.photo}`}
          alt={image._id}
        />
      ))}
    </div>
  );
}

export default GalleryUser