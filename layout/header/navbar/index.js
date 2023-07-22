import { NavWrapper, NavLogo, NavItems, NavItem, NavRight, NavIcons, NavIcon } from './style';

const Navbar =()=>(
    <NavWrapper>
        <NavLogo>DanielOmehe</NavLogo>
        <NavRight>
        <NavItems>
        <NavItem><a href='#'>Home</a></NavItem>
        <NavItem><a href='#'>About</a></NavItem>
        <NavItem><a href='#'>Tech Stack</a></NavItem>
        <NavItem><a href='#'>Projects</a></NavItem>
        <NavItem><a href='#'>Contact</a></NavItem>
        </NavItems>
        <NavIcons>
           <a href='#'> <NavIcon src='icons/github.svg' alt='github' /></a>
           <a href='#'> <NavIcon src='icons/twitter.svg' alt='twitter' /></a>
           <a href='#'> <NavIcon src='icons/linkedin.svg' alt='linkedin' /></a>
        </NavIcons>
        </NavRight>
    </NavWrapper>
)

export default Navbar