import React, { useState,  } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { css } from 'styled-components';

import { Flex, below, white, violet, mauve, cardBorder, box_shadow4 } from '../utilities';

const ProjectCard = ({ title, description, image, openLink, gitLink, alt, info }) => {
    const [cardFlip, setCardFlip] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: (cardFlip === false) ? 1 : 0,
        transform: `perspective(600px) rotateX(${(cardFlip === false) ? 180 : 0}deg)`,
        config: { mass: 4, tension: 300, friction: 39 }
    })

    return ( 
        <div onClick={() => setCardFlip(!cardFlip)}>
            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position:'absolute' }}>
                <CardFront>
                    <Image src={image} alt={alt} />
                    <HTwo>{title}</HTwo>
                    {/* <BTN onClick={() => setCardFlip(!cardFlip)}>More Info</BTN> */}
                </CardFront>
            </animated.div>
           
           <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <CardBack>
                    <Pgraph>{description}</Pgraph>
                    <Pgraph>{info}</Pgraph>
                    <div style={{margin: 'auto 15px 35px'}}>
                        <BTN type="open" href={openLink} target="_blank" rel="noreferrer" alt="opens new window to ">Open</BTN>
                        <BTN href={gitLink} target="_blank" rel="noreferrer" alt="opens new window to ">Github</BTN>
                    </div>
                        {/* <BTN onClick={() => setCardFlip(!cardFlip)}>Return</BTN> */}
                </CardBack>
           </animated.div>
       </div>
     );
}
 
export default ProjectCard;

export const CardFront = styled.div`
    ${Flex({fd:'column'})};
    margin: 20px;
    padding: 20px;
    width: 370px;
    height: 500px;
    border: ${cardBorder};
    border-radius: 70px 3px 70px 3px;
    background: ${mauve};
    background: linear-gradient(to top, ${props => props.theme.gradient1} 2%,  ${props => props.theme.gradient2} 100%);
    box-shadow: ${box_shadow4};
    ${below.small`
        width: 330px;
    `}
    ${below.xXSmall`
        width: 300px;
    `}
`;

export const CardBack = styled(CardFront)`
    border-radius: 3px 70px 3px 70px;
`;

export const Image = styled.img`
    max-width: 225px;
    border: ${cardBorder};
    border-radius: 5px;
`;


export const Pgraph = styled.p`
    font: 400 18px 'Quicksand', sans-serif;
    text-align: center;
    line-height: 24px;
    margin: 30px 5px 5px;
`;

export const HTwo = styled.h2`
    font: 700 30px 'Roboto Mono', monospace;
    text-align: center;
    line-height: 54px;
    margin: 5px;
    color: ${white};
`;

export const BTN = styled.a`
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 10px 20px;
    box-shadow: ${box_shadow4};
    border: ${cardBorder};
    border-radius: 5px;
    font: 600 18px 'Quicksand', sans-serif;
    cursor: pointer;

    color: ${({type}) => (type === 'open' ? `${props => props.theme.button1}` : `${props => props.theme.button2}`)};
    background: ${({type}) => (type === 'open' ? `${props => props.theme.button2}` : `${props => props.theme.button1}`)};

    /* ${props => props.disable && css`
        background: ${({props}) => (props === '')}
    `} */

    :hover {
        color: ${({type}) => (type !== 'open' ? `${props => props.theme.button1}` : `${props => props.theme.button2}`)};
        background: ${({type}) => (type !== 'open' ? `${props => props.theme.button2}` : `${props => props.theme.button1}`)};
    }
`;