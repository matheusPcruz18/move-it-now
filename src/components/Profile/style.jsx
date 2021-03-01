import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    div{
        margin-left: 1.5rem;
        margin-top: 1.5rem;

        strong{
            font-size: 1.5rem;
            font-weight: 600;
            color: ${props => props.theme.title}
        }
        div{
            font-size: 1rem;
            margin-top: 0.5rem;
            display: flex;
            justify-content: flex-start;
            margin-left: 0px;

            img{
                margin-top: -35px;
                margin-right: 10px;
            }
        }
    }
`