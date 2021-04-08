import { useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../layouts/projectCard';
import { Flex, title, yellow3, below, text,  } from '../utilities';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/projects/" } } )
            edges {
                node {
                    frontmatter {
                        title
                        tech
                        image
                        openLink
                        gitLink
                        alt
                        info
                    }
                    html
                }
            }
        }
    `);

    const highlights = data.allMarkdownRemark.edges.filter(
        ({ node }) => node
    ) 
    return ( 
       
            <ProjectBack>
                <Headline>My work</Headline>
                <SubLine>Click card for more info</SubLine>
                <Note>Some projects are hosted on heroku and may take several seconds to load.</Note>
                <CardGroup>
                {highlights.map((project, idx) =>
                    <ProjectCard 
                        key={idx}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        openLink={project.openLink}
                        gitLink={project.gitLink}
                        alt={project.alt}
                        info={project.info}
                    />
                )}
                </CardGroup>
            </ProjectBack>
     );
}
 
export default Projects;

const ProjectBack = styled.article`
    ${Flex({fd:'column'})}
    padding: 0 0 8%;
    overflow: hidden;
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

const SubLine = styled.p`
    margin: 0;
    color: ${yellow3};
    font-family: ${title};
    
`;

const Note = styled.p`
    font: ${text};
    font-size: 1rem;
`;

const CardGroup = styled.section`
    ${Flex({fw:'wrap'})};
    max-width: 1400px;
    ${below.xLarge`
        max-width: 1280px;
    `}
`;