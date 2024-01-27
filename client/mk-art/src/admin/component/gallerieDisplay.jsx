/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './Gallery.css';
import { Link } from 'react-router-dom';
import {staticFile} from '../../axiosUrl';
export function Gallery(props) {

  if (props.photo !== '' ) {

    return (
      <div className="">
        <h3 className='text-center text-gray-100 lg:text-3xl sm:text-2xl text-xl font-semibold mb-8'>Oeuvres Uniques</h3>
        <div className='gallery'>
          {props.photo.map((image, index) => (
            <Link to = {`/gallery/${image._id}`}>
              <img
                key={index}
                className="gallery__item"
                src={ `${staticFile}/${image.photo}`}
                alt={image._id}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <h1>Pas de photo dans la gallery</h1>
      </div>
    )
  }

}

export default Gallery