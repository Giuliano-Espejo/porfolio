import { Button } from "react-bootstrap";
import "./Presentation.css"

export default function Presentation() {
    return (
        <div className="container border border-dark rounded">
            <div className="presentation  ">
                <div className="text-content-presentation">
                    <h1>Giuliano Espejo</h1>
                    <h2>Back-End Developer</h2>
                </div> 
                <img src="/static/fotocara.png" alt="foto cara" className="foto-cara" />
            </div>
            <p className="mx-4">
               Soy Giuliano Espejo, Técnico Universitario en Programación graduado de la Universidad Tecnlógica Nacional regional Mendoza. Me desenvuelvo como desarrollador Back-End utilizando Java-Spring, busco construir soluciones robustas y escalables que impulsan aplicaciones de alto rendimiento.  
            </p>
            <div className="cv">
                <a href="/static/GiulianoEspejoCV.pdf" target="_blank">
                    <Button className="btn btn-light border border-dark mb-4 mt-2 ">Curriculum Vitae</Button>
                </a>
            </div>
        </div >
    )
}
