import { Container } from './style'

export function Profile(){
    return (
        <Container>
            <img src="https://github.com/matheusPcruz18.png" alt="Matheus"/>
            <div>
                <strong>Matheus Pereira</strong>
                                
                <div>
                <img src="icons/level.svg" alt="level" style={{width: '15px'}}/>
                    Level 1
                </div>
                
            </div>
        </Container>
    )
}