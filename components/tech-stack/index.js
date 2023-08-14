import Image from 'next/image';
import { TechStacksWrapper, TechStackTitle, TechStackSubtitle, TechStackContainer } from "./style";
import { stacks } from '../../data'

const TechStacks = () => (
	<TechStacksWrapper>
		<TechStackTitle>My Tech Stack</TechStackTitle>
		<TechStackSubtitle>Technologies i've been working with frequently</TechStackSubtitle>
        <TechStackContainer>
            {
                stacks.map((stack => <Image src={stack.url} width={100} height={100} />))
            }
        </TechStackContainer>
	</TechStacksWrapper>
);

export default TechStacks;
