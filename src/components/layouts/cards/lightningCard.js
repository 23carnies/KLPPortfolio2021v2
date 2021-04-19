import React from 'react';
import styled from 'styled-components';
import { Flex, cardBorder } from '../../utilities';
import { HTwo, Pgraph } from './projectCard';

const LightningCard = ({ title, link, image, alt, description, video}) => {
    return (
        <Card>
            {/* <Image src={image} alt={alt}/> */}
            <iframe src={video} width="560" height="315"  title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    width: 600px;
    border-radius: 12px;
    background: ${props => props.theme.pageBackground};
    margin: 25px;
    border: ${cardBorder};
`;

const Image = styled.img`
    width: 398px;
`;

const CardBody = styled.div`
    width: 398px;
`;

const Title = styled(HTwo)`
    font: 700 30px 'Josefin Sans', sans-serif;
`;

const Descrip = styled(Pgraph)`

`;