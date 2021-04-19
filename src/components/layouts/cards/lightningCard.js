import React from 'react';
import styled from 'styled-components';
import { Flex, cardBorder, below } from '../../utilities';
import { HTwo, Pgraph } from './projectCard';

const LightningCard = ({ title, link, image, alt, description, video}) => {
    return (
        <Card>
            {/* <Image src={image} alt={alt}/> */}
            <Video src={video} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
            <CardBody>
                <Title>{title}</Title>
                <Descrip>{description}</Descrip>
            </CardBody>
        </Card>
    );
}
 
export default LightningCard;

const Card = styled.div`
    ${Flex({fd:'column'})};
    width: 560px;
    border-radius: 12px;
    background: ${props => props.theme.gradient2};
    margin: 25px;
    ${below.xSmall`
      width: 400px;
    `}
    ${below.xXSmall`
      width: 360px;

    `}
`;

const Video = styled.iframe`
    width: 560px;
    height: 315px;
    border: none;
    border-radius: 12px 12px 0 0;
    ${below.xSmall`
      width: 400px;
      height: 300px;
    `}
    ${below.xXSmall`
      width: 360px;

    `}

`;

const CardBody = styled.div`
    height: 220px;
    ${below.small`
      height: 200px;
    `};
    /* ${below.xSmall`
      height: 200px;
    `} */
`;

const Title = styled(HTwo)`
    font: 700 30px 'Josefin Sans', sans-serif;
    margin-top: 4%; 
    ${below.small`
      margin-top: 3%;
    `};
    ${below.xSmall`
       margin-top: 5%;
    `} 
`;

const Descrip = styled(Pgraph)`
    padding: 1%;
`;