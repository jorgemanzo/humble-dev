import React from 'react'
import styled from '@emotion/styled';
import Source from './simpleLink'
import Extern from '../images/external-link.svg'
const ExperienceTitle = (props) => {
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
        margin-left: 10vw;
        padding-right: 10vw;
    `
    return (
        <div>
            <div><Source name={props.section}></Source></div>
            <Source href={`#${props.section}`}>
                <WorkTitle >
                    <SmallerH1>{props.title}</SmallerH1>
                    <SmallerH1>{props.dates}</SmallerH1>
                </WorkTitle>
            </Source>
            {
                props.link ?
                <Employer>
                    <Source href={props.link} target="_blank">
                        {props.employer}&nbsp;<img alt="Open Link in a New Tab" src={Extern}></img>
                    </Source>
                </Employer> : 
                <Employer>{props.employer}</Employer>
            }
        </div>
    )
}

export default ExperienceTitle