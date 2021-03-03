import styled from 'styled-components';
import { Countdown } from '.';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${props => props.theme.title};


    div{
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: ${props => props.theme.white};
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        span{
            flex: 1;
            margin: 0;
        }

        span:first-child{
            border-right: 1px solid ${props => props.theme.background};
        }

        span:last-child{
            border-left: 1px solid ${props => props.theme.background};
        }
    }

    .dots{
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
`

export const CountdownBtn = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background: ${props => props.theme.blue};
    transition: background-color 0.2s;
    color: #fff;

    font-size: 1.25rem;
    font-weight: 600;

    :not(:disabled):hover{
        background: ${props => props.theme.blueDark};
    }
`

export const StopCountdownBtn = styled(CountdownBtn)`
    background: ${props => props.theme.white};
    color: ${props => props.theme.title};

    :not(:disabled):hover{
        background: ${props => props.theme.red};
        color: ${props => props.theme.white}; 
    }
`
export const FinishedBtn = styled(StopCountdownBtn)`
    cursor: not-allowed ;
    background: ${props => props.theme.white};

    border-bottom: 0.3rem solid ${props => props.theme.green}
`