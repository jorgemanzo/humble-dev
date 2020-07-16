import React from 'react'
import styled from '@emotion/styled'

const Selfie = (props) => {
  const StyledImage = styled.img`
    width: calc(100px + (200 - 100) * ((100vw - 300px) / (1600 - 300)));
    height: calc(100px + (200 - 100) * ((100vw - 300px) / (1600 - 300)));
    border-radius: 25px;
  `
  return (

    <div>
      <StyledImage src={props.imgSrc} alt={props.altText}/>
      <br/>
      <em>{props.captionText}</em>
    </div>
  )
}

export default Selfie