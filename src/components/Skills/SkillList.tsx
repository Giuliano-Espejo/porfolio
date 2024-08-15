import { Skill } from './Skill'
import "./SkillList.css"

export default function SkillList() {
    return (
        <>
            <h2>Habilidades Técnicas</h2>
            <div className='containerListSkill'>
                <Skill nombre="Spring" imagen="public/spring.png" />
                <Skill nombre="Java" imagen="public/java.png" />
                <Skill nombre="Git" imagen="public/git.png" />
                <Skill nombre="GitHub" imagen="public/github.png" />
                <Skill nombre="Intellij" imagen="public/intellij.png" />
                <Skill nombre="Visual Studio Code" imagen="public/vscode.png" />
                <Skill nombre='MySql' imagen='public/mysql.png' />
            </div>
        </>
    )
}
