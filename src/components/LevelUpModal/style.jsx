import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(243, 243, 245, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 0.4s;
`

export const Container = styled.div`
    background: ${props => props.theme.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    header{
        font-size: 8.75rem;
        font-weight: 600;
        color: ${props => props.theme.blue};
        background: url('./icons/levelup.svg') no-repeat center;
        background-size: contain;
    }

    strong{
        font-size: 2.25rem;
        color: ${props => props.theme.title};
    }

    p{
        font-size: 1.25rem;
        color: ${props => props.theme.text};
        margin-top: 0.25rem;
    }

    button{
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        font-size: 0;
    }
`