import { Skill } from './Skill'
import "./SkillList.css"

export default function SkillList() {
    return (
        <>
            <h2>Habilidades Técnicas</h2>
            <div className='containerListSkill'>
                <Skill nombre="Spring" imagen="/static/spring.png" />
                <Skill nombre="Java" imagen="/static/java.png" />
                <Skill nombre="Git" imagen="/static/git.png" />
                <Skill nombre="GitHub" imagen="/static/github.png" />
                <Skill nombre="Intellij" imagen="/static/intellij.png" />
                <Skill nombre="Visual Studio Code" imagen="/static/vscode.png" />
                <Skill nombre='MySql' imagen='/static/mysql.png' />
            </div>
        </>
    )
}
