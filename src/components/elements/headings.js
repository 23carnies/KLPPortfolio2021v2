import styled from 'styled-components';
import { below } from '../utilities';

export const Heading = styled.h1`
  color: ${props => props.theme.titleColor};
  font: 700 2.5rem 'Josefin Sans', sans-serif;
  ${below.small`
    line-height: 1rem;
    margin: 1rem 0;
  `}
`;

export const SubHeading = styled.h2`
  color: ${props => props.theme.tagLineColor};
  font: 700 28px 'Josefin Sans', sans-serif;
  line-height: 1.4;
  padding: 0 3%;
`;

export const Headline = styled.h3`
  text-align: center;
  color: ${props => props.theme.titleColor};
  margin: 2.5% 1% 1%;
  ${below.large`
        font-size: 2.4rem;
    `}
  ${below.medium`
        font-size: 2rem;
        margin-top: 4%;
    `}
`;
