import React from 'react'
import styled from '@emotion/styled'
import H1 from './h1'
const Experience = (props) => {
    const Container = styled.div`
        display: flex;
        margin-top: 25px;
        margin-left: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
        margin-right: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
    `
    const SmallerH1 = styled.h1`
        font-size: calc(14pt + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
    `
    return (
        <div>
            <Container>
                <SmallerH1>{props.title}</SmallerH1>
                <SmallerH1>{props.dates}</SmallerH1>
            </Container>
        </div>
    )
}

export default Experience