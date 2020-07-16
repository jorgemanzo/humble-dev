import React from 'react'
import styled from '@emotion/styled'

const H1 = (props) => {
  const StyledH1 = styled.h1`
    margin-left: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
    margin-right: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
    font-size: calc(18pt + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    padding: 15px;
  `
  return (
    <div>
        <StyledH1>{props.h1}</StyledH1>
    </div>
  )
}

export default H1