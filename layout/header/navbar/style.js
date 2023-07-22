import { styled } from 'styled-components';

export const NavWrapper = styled.nav`
    width: 80%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 19rem;
`

export const NavLogo = styled.h2`
    font-size: 45px;
    color: #000;
`

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    Justify-content: flex-start;
    gap: 3rem;
    height: 100%;
`

export const NavItem = styled.li`
    list-style: none;
    margin: 0 auto;

    a{
        color: #000;
        text-decoration: none;
    }
`

export const NavRight = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    Justify-content: space-between;
    gap: 2rem;
`

export const NavIcons = styled.ul`
    display: flex;
    align-items: center;
    Justify-content: flex-start;
    gap: 1rem;
`

export const NavIcon = styled.img``