import React from 'react'
import styled from '@emotion/styled'
import P from './p'
import Bullet from './bullet'
const Experience = (props) => {
    const WorkTitle = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 25px;
    `
    const SmallerH1 = styled.h1`
        font-size: calc(14pt + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
    `
    const Employer = styled.em`
        margin-top: 26px;
    `
    return (
        <div>
            <WorkTitle>
                <SmallerH1>{props.title}</SmallerH1>
                <Employer>{props.employer}</Employer>
                <SmallerH1>{props.dates}</SmallerH1>
            </WorkTitle>
            <P>
                {props.description}
            </P>
            <ul>
                {
                    props.bullets.map(
                        bullet => <Bullet>{bullet.point}</Bullet>
                    )
                }
            </ul>
        </div>
    )
}

export default Experience