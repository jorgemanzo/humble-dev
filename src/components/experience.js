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
                data={props.data}
            />
            <P>
                {props.data.description}
            </P>
            <ul>
                {
                    props.data.bullets.map(
                        (bullet, index) => <Bullet key={index}>{bullet.point}</Bullet>
                    )
                }
            </ul>
        </BottomMargin>
    )
}

export default Experience