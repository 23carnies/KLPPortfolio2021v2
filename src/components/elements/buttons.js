import styled from 'styled-components';
import { box_shadow1, box_shadow4 } from '../utilities';

export const Btn = styled.a`
  width: 100px;
  height: 50px;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: ${box_shadow4};
  border: 1px solid ${props => props.theme.titleColor};
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  color: ${props => props.theme.fontColor};
  background: ${props => props.theme.button};

  &:hover {
    color: ${props => props.theme.pageBackground};
    background: ${props => props.theme.button};
    box-shadow: ${box_shadow1};
  }
  transition: all 0.4s ease;
`;

export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
`;
