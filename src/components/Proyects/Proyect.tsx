import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Proyect.css";
import { Button } from 'react-bootstrap';

interface ImgCarousel {
  nombre: string,
  desc: string,
  imagen: string,
  alt: string,
  imagen2: string,
  alt2: string,
  imagen3: string,
  alt3: string,
  repo: string
}

export const Proyect: FC<ImgCarousel> = ({ imagen, alt, imagen2, alt2, imagen3, alt3, nombre, desc, repo }) => {
  console.log("imagen1", imagen);
  console.log("imagen2", imagen2);
  console.log("imagen3", imagen3);
  return (
    <div className="carousel-container">
      <Carousel className="carousel" data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src={imagen}
            alt={alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={imagen2}
            alt={alt2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={imagen3}
            alt={alt3}
          />
        </Carousel.Item>
      </Carousel>
      <div className="text-content">
        <h3>{nombre}</h3>
        <p>
          {desc}
        </p>
        {
          (repo != "") ?
            <div className='github'>
              <a href={repo} target="_blanck">
                <Button className='btn-dark'>Github</Button>
              </a>
            </div>
            :
            null
        }
      </div>
    </div>
  );
}
