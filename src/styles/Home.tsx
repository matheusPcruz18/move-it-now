import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;

    section{
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;
        margin-top: 3rem;

        @media(max-width: 738px){
            flex: 1;
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: 1fr 1fr;
            gap: 1.25rem;
            align-content: center;
        }
    }
`  
