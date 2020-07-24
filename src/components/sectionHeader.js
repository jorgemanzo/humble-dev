import React from 'react'
import styled from '@emotion/styled';
import Source from './simpleLink'
let SectionHeader = (props) => {
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
    if(props.section && props.title && props.dates) {
        return (
            <div>
                <div><Source name={props.section}></Source></div>
                <Source href={`#${props.section}`}>
                    <WorkTitle >
                        <SmallerH1>{props.title}</SmallerH1>
                        <SmallerH1>{props.dates}</SmallerH1>
                    </WorkTitle>
                </Source>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default SectionHeader