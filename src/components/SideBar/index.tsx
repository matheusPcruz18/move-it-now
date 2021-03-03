import { useContext, useState } from 'react'
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext'
import { Container } from './style'

export function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const { handletoggleTheme } = useContext(ThemeContext)

    return(
        <Container>
            <header>
                <img src="/sidebar-logo.png" alt="logo-icon"/>
            </header>

            <main>
                <button>
                    <img src="/icons/home1.png" alt="home-icon"/>
                </button>
                
                <button onClick={handletoggleTheme}>
                    <img src="/icons/light-bulb.png" alt="light-icon" />
                </button>
                
            </main>
        </Container>
    )
}