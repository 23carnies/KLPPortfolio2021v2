import styled from 'styled-components';
import { box_shadow4, cardBorder } from '../utilities'


export const Btn = styled.a`
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 10px 20px;
    box-shadow: ${box_shadow4};
    border: ${cardBorder};
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    color: ${props => props.theme.fontColor};
    background: ${props => props.theme.button2};

    :hover {
        color: ${({type}) => (type !== 'open' ? `${props => props.theme.button1}` : `${props => props.theme.button2}`)};
        background: ${({type}) => (type !== 'open' ? `${props => props.theme.fontColor}` : `${props => props.theme.button1}`)};
    }
    transition: all .5s ease;
`;

export const ToggleBtn = styled(Btn)`
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    border: 2px solid white;
`;