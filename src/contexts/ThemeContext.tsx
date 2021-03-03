import { createContext, ReactNode, useState, useContext } from "react";

import { dark, light } from '../styles/themes'

import { ThemeProvider as Provider } from 'styled-components';


interface ThemeContextData {
    theme: string;
    handletoggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)


export function ThemeProvider( {children}: ThemeProviderProps ) {
    const [theme, setTheme] = useState('light')

    const handletoggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return (
    <ThemeContext.Provider 
        value={{ 
            theme, 
            handletoggleTheme 
        }}
    >
        <Provider theme={theme === 'light' ? light : dark}>
            {children}
        </Provider>
    </ThemeContext.Provider>
    )
}