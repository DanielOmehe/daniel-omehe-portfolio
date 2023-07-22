import { HeaderContentWrapper, HeaderContentRight, HeaderContentLeft } from './style';

const HeaderContent =()=>(
    <HeaderContentWrapper>
        <HeaderContentLeft>
            <h1>
            Hi 👋,
            My name is
            <span> Daniel Omehe </span>
            I build things for web
            </h1>
        </HeaderContentLeft>
        <HeaderContentRight />
    </HeaderContentWrapper>
)

export default HeaderContent