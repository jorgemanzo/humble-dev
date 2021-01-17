import React from 'react'
import Selfie from './image'
import H1 from './h1'
import styled from '@emotion/styled'

const Headline = () => {
  // TODO: It would be great to move some of these details (image source, etc) to some external file.
  const StyledRoot = styled.div`
    margin-top: 25px;
    margin-left: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
    margin-right: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
  `
  const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const StyledH1 = styled.div`
    margin-left: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
    margin-right: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
  `
  return (
    <StyledRoot>
      <StyledRow>
        <Selfie 
          altText="Photo of Myself" 
          captionText="" 
        />
        <StyledH1>
          <H1>Milly Guitron</H1>
          <em>(formerly Jorge Manzo)</em>
        </StyledH1>
      </StyledRow>
    </StyledRoot>
  )
}

export default Headline