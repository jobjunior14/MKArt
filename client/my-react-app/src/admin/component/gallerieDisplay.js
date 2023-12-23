import React from 'react';


import './Gallery.css';
import { Link } from 'react-router-dom';

export function Gallery(props) {


  return (
    <div className="gallery">
      {props.photo.map((image, index) => (
       <Link to = {`/gallery/${image._id}`}>
         <img
          key={index}
          className="gallery__item"
          src={ `http://192.168.43.47:5000/${image.photo}`}
          alt={image._id}
        />
       </Link>
      ))}
    </div>
  );
}

export default Gallery