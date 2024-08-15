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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!
            </p>
            <div className="cv">
                <a href="/static/GiulianoEspejoCV.pdf" target="_blank">
                    <Button className="btn btn-light border border-dark mb-4 mt-2 ">Curriculum Vitae</Button>
                </a>
            </div>
        </div >
    )
}
