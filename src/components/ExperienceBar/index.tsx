import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Header } from './style'

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <Header>
            <span className="expLeft">
                0 xp
            </span>
            <div className="backBar">
                <div className="frontBar" style={{width: `${percentToNextLevel}%`}} />

                <span style={{left: `${percentToNextLevel}%`}}>
                    {currentExperience > 0 && currentExperience + ' xp'}
                </span>
            </div>
            <span className="expRight">{experienceToNextLevel} xp</span>
        </Header>
    )
}