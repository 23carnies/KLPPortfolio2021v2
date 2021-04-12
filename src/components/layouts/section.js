import styled from 'styled-components'
import { Flex } from '../utilities';

export const Section = styled.section`
    position: ${({type}) => type === 'hero'
        ? 'relative'
        : 'static'
    };
    background: blueviolet;
    ${Flex({fd:'column',ai:'center',jc:'center'})}
    /* margin: 0 auto; */
`;