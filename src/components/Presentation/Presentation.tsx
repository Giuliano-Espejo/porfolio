import { Button } from "react-bootstrap";
import "./Presentation.css"

export default function Presentation() {
    return (
        <div className="container">
            <div className="presentation">
                <div className="text-content-presentation">
                    <h1>Giuliano Espejo</h1>
                    <h2>Back-End Developer</h2>
                </div>
                <img src="/static/fotocara.webp" alt="foto cara" className="foto-cara" />
            </div>
            <p className="mx-4">
                ¡Hola! Soy <strong>Giuliano Espejo</strong>, un Desarrollador Back-End, con conocimientos Full Stack y con una sólida formación en <strong>Java</strong> y más de un año de experiencia en el desarrollo
                 de aplicaciones backend y frontend. Me apasiona crear soluciones eficientes y escalables, siempre utilizando prácticas de <strong>código 
                 limpio</strong> y aplicando arquitectura limpia en mis proyectos. He trabajado en diversos proyectos, desde sistemas de microservicios hasta
                  gestión de stock y empleados, y tengo un enfoque centrado en la mejora continua y la innovación.
            </p>
            <div className="cv">
                <a href="/static/GiulianoEspejoCV.pdf" target="_blank">
                    <Button className="btn btn-light border border-dark mb-4 mt-2 ">Curriculum Vitae</Button>
                </a>
            </div>
        </div >
    )
}
