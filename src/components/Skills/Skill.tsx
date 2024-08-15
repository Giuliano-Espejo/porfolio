import Card from 'react-bootstrap/Card';
import { FC } from "react"
import "./Skill.css"

interface SkillDetails {
    nombre:string,
    imagen:string,
}
export const Skill: FC<SkillDetails> = ( {nombre, imagen}) => {
    // console.log("img", imagen);
    // console.log("nombre", nombre);
    return (
    <Card className='card-skill'>
      <Card.Img variant="top" src={imagen} alt={nombre} />
    </Card>
  );
}