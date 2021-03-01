import { clear } from 'console';
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, CountdownBtn, StopCountdownBtn, FinishedBtn } from './style'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { startNewChallenge } = useContext(ChallengesContext)

    const [isActive, setIsActive] = useState(false)

    const [time, setTime] = useState( 0.1 * 30 )

    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setIsActive(true)
    
    }
    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 30)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <>
            <Container>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span className="dots">:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </Container>

            { hasFinished ? (
                <FinishedBtn disabled>
                    Ciclo encerrado ✅
                </FinishedBtn>
            ) : (
                <>
                { isActive ? (
                    <StopCountdownBtn onClick={resetCountdown}>
                        Abandonar ciclo
                    </StopCountdownBtn>
                ) : (
                    <CountdownBtn onClick={startCountdown}>
                        Iniciar um ciclo
                    </CountdownBtn>
                )}
                </>
            )}

            
        </>
    )
}