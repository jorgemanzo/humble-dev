import React from 'react'
import styled from '@emotion/styled';
import Link from './simpleLink'

const Section = (props) => {
    const Section = styled.h1`
        margin-top: 50px;
        font-size: calc(18pt + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
    `
    return (
        <div>
            <Link name={props.sectionName}></Link>
            <Link href={`#${props.sectionName}`}><Section>{props.sectionTitle}</Section></Link>
        </div>
    )
}

export default Section