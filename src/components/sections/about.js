import React from 'react';
import styled from 'styled-components';
import { Flex, text, below } from '../utilities';
import { Section } from '../layouts/section';

const About = () => {
  return (
    <Section id="about">
      <Box>
        <div style={{ minWidth: '50%' }}>
          <AboutText>
            From my earliest memories, I’ve always loved to learn. I taught
            myself to play guitar and built a car from scratch with my father as
            a teenager. I enjoy DIYing and cooking, both allowing my creative
            side to flourish. I’ve studied multiple human languages and I picked
            up HTML and CSS in college. For years I built sites for family and
            friends until deciding to pivot my career to software development.{' '}
          </AboutText>
          <AboutText>
            A recent graduate of the Software Engineering Immersive at General
            Assembly, I am experienced in modern web design. Skilled in pure CSS
            and several frameworks, I build alluring sites and apps with great
            functionality.
          </AboutText>
          <AboutText>
            I have a passion for rowing, a sport of focus and dedication. I
            bring these skills with me to every project. With a fondness for
            spoken languages, travel, and fitness, I want to see the world; and
            see what positive change I can be in it.
          </AboutText>
        </div>
      </Box>
    </Section>
  );
};

export default About;

const Box = styled.div`
  ${Flex({ ai: 'flex-start' })}
  width: 100%;
  ${below.large`
        ${Flex({ fd: 'row', fw: 'wrap' })};
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
