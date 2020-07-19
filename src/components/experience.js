import React from 'react'
import styled from '@emotion/styled'
import P from './p'
import Bullet from './bullet'
import Source from './simpleLink'
import Extern from '../images/external-link.svg'
const Experience = (props) => {
    const WorkTitle = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;
    `
    const SmallerH1 = styled.h1`
        font-size: calc(14pt + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
        margin: 15px;
    `
    const Employer = styled.em`
        margin-top: 26px;
        margin-left: 50px;
        margin-right: 50px;
    `
    const BottomMargin = styled.div`
        margin-bottom: 25px;
    `
    return (
        <BottomMargin>
            <WorkTitle>
                <SmallerH1>{props.title}</SmallerH1>
                <SmallerH1>{props.dates}</SmallerH1>
            </WorkTitle>
            {
                props.link ?
                <Employer>
                    <Source href={props.link} target="_blank">
                        {props.employer}&nbsp;<img alt="Open Link in a New Tab" src={Extern}></img>
                    </Source>
                </Employer> : 
                <Employer>{props.employer}</Employer>
            }
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