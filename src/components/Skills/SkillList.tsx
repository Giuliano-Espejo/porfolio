import { Skill } from './Skill'
import "./SkillList.css"

export default function SkillList() {
    return (
        <div className='skills'>
            <h2 style={{textAlign:"center", marginBottom:"2%"}} >Habilidades Técnicas</h2>
            <div className='containerListSkill'>
                <Skill nombre="Spring" imagen="/static/spring.webp" />
                <Skill nombre="Java" imagen="/static/java.webp" />
                <Skill nombre="Git" imagen="/static/git.webp" />
                <Skill nombre="GitHub" imagen="/static/github.webp" />
                <Skill nombre='MySql' imagen='/static/mysql.webp' />
                <Skill nombre='HTML5' imagen='/static/html.webp' />
                <Skill nombre='CSS3' imagen='/static/css.webp' />
                <Skill nombre='React' imagen='/static/react.webp' />
                <Skill nombre="Intellij" imagen="/static/intellij.webp" />
                <Skill nombre="Visual Studio Code" imagen="/static/vscode.webp" />
            </div>
        </div>
    )
}
