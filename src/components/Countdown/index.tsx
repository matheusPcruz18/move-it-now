import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext';
import { Container, CountdownBtn, StopCountdownBtn, FinishedBtn } from './style'


export function Countdown(){
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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