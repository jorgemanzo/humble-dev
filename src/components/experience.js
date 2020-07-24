import React from 'react'
import styled from '@emotion/styled'
import P from './p'
import Bullet from './bullet'
import ExperienceTitle from './experienceTitle'
const Experience = (props) => {
    const BottomMargin = styled.div`
        margin-bottom: 25px;
    `
    return (
        <BottomMargin>
            <ExperienceTitle 
                section={props.section}
                title={props.title}
                dates={props.dates}
                link={props.link}
                employer={props.employer}
            />
            <P>
                {props.description}
            </P>
            <ul>
                {
                    props.bullets.map(
                        (bullet, index) => <Bullet key={index}>{bullet.point}</Bullet>
                    )
                }
            </ul>
        </BottomMargin>
    )
}

export default Experience