import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Proyect.css";
import { Button } from 'react-bootstrap';

interface ImgCarousel {
  nombre: string,
  description: string,
  imagen: string,
  alt: string,
  imagen2?: string, // Hacemos que las imágenes adicionales sean opcionales
  alt2?: string,
  imagen3?: string,
  alt3?: string,
  technologies: string[],
  repo: string
}

export const Proyect: FC<ImgCarousel> = ({
  imagen,
  alt,
  imagen2,
  alt2,
  imagen3,
  alt3,
  nombre,
  description,
  technologies,
  repo
}) => {
  // Contar cuántas imágenes hay
  const images = [imagen, imagen2, imagen3].filter(Boolean); // Filtra las imágenes válidas
  const altTexts = [alt, alt2, alt3].filter(Boolean); // Filtra los textos alternativos válidos

  return (
    <div className="carousel-container">
      {/* Mostrar imagen única o carrusel */}
      {images.length === 1 ? (
        <img className="d-block" src={images[0]} alt={altTexts[0]} />
      ) : (
        <Carousel className="carousel" data-bs-theme="dark">
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" src={img} alt={altTexts[index]} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {/* Contenido del proyecto */}
      <div className="text-content">
        <h3>{nombre}</h3>
        <p>{description}</p>

        {/* Tabla de tecnologías */}
        <table className="tech-table container">
          <tbody>
            {technologies.reduce((rows, tech, index) => {
              // Agrupa cada dos tecnologías en una fila
              if (index % 2 === 0) {
                rows.push([tech]); // Inicia una nueva fila
              } else {
                rows[rows.length - 1].push(tech); // Agrega la tecnología a la fila existente
              }
              return rows;
            }, [] as string[][]).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((tech, techIndex) => (
                  <td key={techIndex}>{tech}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Enlace a GitHub */}
        {repo && (
          <div className='github'>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <Button className='btn-dark mt-1'>Github</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
