import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container } from './style'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return (
        <Container>
            { activeChallenge ? (
                <div className="active">
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button className="failedBtn" onClick={resetChallenge}>
                            Falhei
                        </button>

                        <button className="succeededBtn">
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className="notActive">
                    <strong>Finalize um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            ) }
        </Container>
    )
}