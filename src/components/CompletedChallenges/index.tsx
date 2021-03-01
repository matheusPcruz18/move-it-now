import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container } from './style'

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <Container>
            <span className="title">Desafios completos</span>
            <span className="challengesNumber">{challengesCompleted}</span>
        </Container>
    )
}