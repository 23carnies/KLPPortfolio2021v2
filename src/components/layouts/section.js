import styled from 'styled-components';
import { Flex } from '../utilities';

export const Section = styled.section`
  border-bottom: 10px solid ${props => props.theme.tagLineColor};
  padding-bottom: 2%;
  ${Flex({ fd: 'column', ai: 'center', jc: 'center' })};
`;
