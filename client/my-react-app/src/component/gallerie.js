import React from 'react';
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';
import d from './4.jpg';
import e from './5.jpg';
import f from './6.jpg';

import './Gallery.css';

const images = [
    {
      original: a,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: b,
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: c,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: d,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: e,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: f,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export function Gallery() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.original}
          alt={image.thumbnail}
        />
      ))}
    </div>
  );
}

export default Gallery