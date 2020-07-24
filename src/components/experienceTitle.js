import React from 'react'
import styled from '@emotion/styled';
import Source from './simpleLink'
import Extern from '../images/external-link.svg'
import Header from './sectionHeader'
const ExperienceTitle = (props) => {
    const Employer = styled.em`
        margin-top: 26px;
        margin-left: 10vw;
        padding-right: 10vw;
    `
    return (
        <div>
            <Header 
                section={props.section}
                title={props.title}
                dates={props.dates}
            />
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