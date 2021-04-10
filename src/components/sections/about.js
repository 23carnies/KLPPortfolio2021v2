import React from 'react';
import styled from 'styled-components';
import { Flex, yellow3, imgBorder, title, text, below, white } from '../utilities'

const About = () => {

    return ( 
            <AboutBack>
            <Headline>Hi! I'm Karen</Headline>
            <Box>
                <div style={{minWidth: '50%'}}>
                <AboutText>From my earliest memories, I’ve always loved to learn. I taught myself to play guitar and built a car from scratch with my father as a teenager. I enjoy DIYing and cooking, both allowing my creative side to flourish. I’ve studied multiple human languages and I picked up HTML and CSS in college. For years I built sites for family and friends until deciding to pivot my career to software development. </AboutText>
                <AboutText>A recent graduate of the Software Engineering Immersive at General Assembly, I am experienced in modern web design. Skilled in pure CSS and several frameworks, I build alluring sites and apps with great functionality.</AboutText>
                <AboutText>I have a passion for rowing, a sport of focus and dedication. I bring these skills with me to every project. With a fondness for spoken languages, travel, and fitness, I look to make a positive difference in the world. I want to see the world, and see what positive change I can be in it.</AboutText>
                </div>
                </Box>
            </AboutBack>
    );
}
 
export default About;


const AboutBack = styled.div`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    ${Flex({fd:'column'})};
    border-bottom: 5px solid ${white};
    ${below.xLarge`
        max-width: 1280px;
    `}
    

`;

const Box = styled.div`
    background-image: url('/images/klo-pink-white-race.png');
    ${Flex({ai:'flex-start'})}
    width: 100%;
    ${below.large`
        ${Flex({fd:'row',fw:'wrap'})};
    `}
`;

const Headline = styled.h3`
    text-align: center;
    font-family: ${title};
    color: ${yellow3};
    margin: 1.5% 1% 1%;
    ${below.large`
        font-size: 2.4rem;
    `}
    ${below.medium`
        font-size: 2rem;
    `}
`;

const AboutText = styled.p`
    font: ${text};
    max-width: 95%;
    margin: 40px 20px;
    ${below.large`
        font-size: 1.5rem;
    `}
`;