import React from 'react'
import styled from '@emotion/styled'

const P = (props) => {
  const StyledP = styled.p`
    margin-left: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
    margin-right: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
    margin-top: 35px;
    text-align: left;
    font-size: calc(12pt + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
    padding: 15px;
  `
  return (
    <div>
      <StyledP>{props.text}</StyledP>
    </div>
  )
}

export default P