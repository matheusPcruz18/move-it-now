import styled from 'styled-components'

export const Container = styled.div`
    width: 7%;
    height: 100vh;
    position: absolute;
    background-image: 
        linear-gradient(180deg, ${props => props.theme.white}, ${props => props.theme.background});
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.30s;
    box-shadow: 2px 2px 12px -2px rgba(0,0,0,0.27);

    top: 0;
    left: 0;

    @media(max-width: 738px){
        width: 0;

        header{
            display: none;
        }
        main{
            display: none;
        }
        button{
            display: none;
        }
    }

    header{
        top: 0;
        margin-top: 4rem;
        position: absolute;
    }

    img{
        width: 45px;
    }

    main{
        display: flex;
        flex-direction: column;

        img{
            margin: 10px 0;
        }
    }

    button{
        padding: 0px;
        margin: 15px 0;
    }
`