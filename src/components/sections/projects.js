import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../layouts/cards/projectCard';
import { Section } from '../layouts/section';
import { Flex, title, below, text } from '../utilities';
import { Headline } from '../elements/headings';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              alt
              gitLink
              image
              info
              openLink
              tech
              title
            }
            excerpt
          }
        }
      }
    }
  `);

  const highlights = data.allMarkdownRemark.edges.filter(({ node }) => node);

  return (
    <Section id="projects">
      <Headline>My work</Headline>
      <SubLine>Click card for more info</SubLine>
      <Note>
        Some projects are hosted on heroku and may take several seconds to load.
      </Note>
      <CardGroup>
        {highlights &&
          highlights.map(({ node }, idx) => {
            const { excerpt, frontmatter } = node;
            const {
              alt,
              gitLink,
              image,
              info,
              openLink,
              tech,
              title,
            } = frontmatter;
            return (
              <ProjectCard
                key={idx}
                title={title}
                description={excerpt}
                image={image}
                openLink={openLink}
                gitLink={gitLink}
                alt={alt}
                info={info}
              />
            );
          })}
      </CardGroup>
    </Section>
  );
};

export default Projects;

export const SubLine = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.tagLineColor};
  /* font-family: ${title}; */
`;

const Note = styled.p`
  font-size: 1.3rem;
  padding: 0 3%;
`;

export const CardGroup = styled.section`
  ${Flex({ fw: 'wrap' })};
  max-width: 1400px;
  ${below.xLarge`
        max-width: 1280px;
    `}
`;
