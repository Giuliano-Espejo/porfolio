import { FC, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Skill.css";

interface SkillDetails {
    nombre: string;
    imagen: string;
}

export const Skill: FC<SkillDetails> = ({ nombre, imagen }) => {
    const [showName, setShowName] = useState(false);

    const handleTouch = () => {
        setShowName(!showName);
    };

    return (
        <Card
            className={`card-skill ${showName ? "show-name" : ""}`}
            title={nombre}
            onTouchStart={handleTouch} // Muestra el nombre al tocar en dispositivos móviles
        >
            <Card.Img variant="top" src={imagen} alt={nombre} />
            <div className="skill-name">{nombre}</div> {/* Aquí se muestra el nombre */}
        </Card>
    );
};
