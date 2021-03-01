import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;

    .expLeft{
        font-size: 1rem;
    }

    .backBar{
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: ${props => props.theme.grayLine};
        margin: 0 1.5rem;
        position: relative;

        .frontBar{
            flex: 1;
            height: 4px;
            border-radius: 4px;
            background: ${props => props.theme.green};
            transition: all ease 0.50s;
        }

        span{
            position: absolute;
            top: 12px;
            transform: translateX(-50%);

            transition: all ease 0.50s;
        }
    }
`