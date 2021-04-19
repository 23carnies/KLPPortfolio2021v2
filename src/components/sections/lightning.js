import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import LightningCard from '../layouts/cards/lightningCard';
import { Section } from '../layouts/section';
import { SubLine, CardGroup } from '../sections/projects';
import { Headline } from '../elements/headings';

const LightningTalks = () => {
  const data = useStaticQuery(graphql`
    query lightning {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/lightningTalks/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              link
              image
              alt
              video
            }
            excerpt
          }
        }
      }
    }
  `);
 
 const talks = data.allMarkdownRemark.edges.filter(({ node }) => node);
 
 return (
    <Section id="talks">
        <Headline>Lightning Talks</Headline>
        <SubLine>Short video presenations on topics I'm learning more about.</SubLine>
        <CardGroup>
            {talks && talks.map(({ node }, idx) => {
                const { excerpt, frontmatter } = node;
                const { title, link, image, alt, video } = frontmatter;
                return (
                    <LightningCard 
                      key={idx}
                      title={title}
                      description={excerpt}
                      image={image}
                      link={link}
                      alt={alt}
                      video={video}
                    />
                )
            })}
        </CardGroup>
    </Section>
     )
};

export default LightningTalks;