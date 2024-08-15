import Card from 'react-bootstrap/Card';
import { FC } from "react"
import "./Skill.css"

interface SkillDetails {
    nombre: string,
    imagen: string,
}
export const Skill: FC<SkillDetails> = ({ nombre, imagen }) => {
    return (
        <Card className='card-skill' title={nombre}>
            <Card.Img variant="top" src={imagen} alt={nombre} />
        </Card>
    );
}
