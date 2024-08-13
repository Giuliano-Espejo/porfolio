import Card from 'react-bootstrap/Card';
import { FC } from "react"

interface SkillDetails {
    nombre:string,
    imagen:string,
}
export const Skill: FC<SkillDetails> = ( {nombre, imagen}) => {
    console.log("img", imagen);
    console.log("nombre", nombre);
    return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={imagen} alt={nombre} />
    </Card>
  );
}