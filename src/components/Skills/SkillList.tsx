import { Skill } from './Skill'
import "./SkillList.css"

export default function SkillList() {
    return (
        <>
            <h2>Habilidades Técnicas</h2>
            <div className='containerListSkill'>
                <Skill nombre="Spring" imagen="src/assets/spring.png" />
                <Skill nombre="Java" imagen="src/assets/java.png" />
                <Skill nombre="Git" imagen="src/assets/git.png" />
                <Skill nombre="GitHub" imagen="src/assets/github.png" />
                <Skill nombre="Intellij" imagen="src/assets/intellij.png" />
                <Skill nombre="Visual Studio Code" imagen="src/assets/vscode.png" />
                <Skill nombre='MySql' imagen='src/assets/mysql.png' />
            </div>
        </>
    )
}
