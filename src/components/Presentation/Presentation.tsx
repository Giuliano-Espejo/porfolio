import { Button } from "react-bootstrap";
import "./Presentation.css"

export default function Presentation() {
    return (
        <div className="container">
            <h1>Giuliano Espejo</h1>
            <h2>Developer Back-End</h2>
            <img src="src/assets/fotocara.png" alt="foto cara" className="foto-cara" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!
            </p>
            <a href="/public/GiulianoEspejoCV.pdf" target="_blank">
                <Button className="btn">Curriculum Vitae</Button>
            </a>
        </div>
    )
}
