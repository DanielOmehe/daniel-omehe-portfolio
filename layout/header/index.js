import { HeaderWrapper } from './style';
import  Navbar from './navbar';
import HeaderContent from './content';

const Header =()=>(
    <HeaderWrapper>
        <Navbar />
        <HeaderContent />
    </HeaderWrapper>
)

export default Header