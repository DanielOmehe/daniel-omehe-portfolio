import { styled  } from 'styled-components';

export const HeaderContentWrapper = styled.section`
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 13.75rem auto 0;
    gap: 13.6rem;
    position: relative;
`

export const HeaderContentRight = styled.div`
    width: 25.8125rem;
    height: 25.8125rem;
    background: url('images/dan.jpg');
    background-repeat: no-repeat;
    Background-position: 0% 5%;
    background-size: cover;
    border: 3px solid #E70FAA, #00C0FD;
    border-radius: 14.375rem;
    position: absolute;
    top: -20%;
    left: 65%;
`

export const HeaderContentLeft = styled.div`
    width: 100%;
    height: 100%;

 h1{
    color: #fff;
    font-size: 60px;

    span{
        color: var(--solid-heading, #42446E);
        font-family: Poppins;
        font-size: 3.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4.375rem; /* 120.69% */
        letter-spacing: -0.0625rem;
    }
 }
`