import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container } from './style'

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return (
        <Container>
            <img src="https://github.com/matheusPcruz18.png" alt="Matheus"/>
            <div>
                <strong>Matheus Pereira</strong>
                                
                <div>
                <img src="icons/level.svg" alt="level" style={{width: '15px'}}/>
                    Level {level}
                </div>
                
            </div>
        </Container>
    )
}