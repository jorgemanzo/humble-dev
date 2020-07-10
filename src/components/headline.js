import React from 'react'
import Selfie from './image'
import H1 from './h1'

const Headline = () => {
  // TODO: It would be great to move some of these details (image source, etc) to some external file.
  return (
    <div className="root">
      <div className="row">
        <Selfie 
          className="item" 
          imgSrc={`https://avatars3.githubusercontent.com/u/26660036`} 
          altText="Photo of Myself" 
          captionText="Hi!" 
        />
        <H1 className="item" h1="Welcome to my thing!" />
      </div>
      <style jsx>{`
        .row {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        
        .root {
          margin: 25px;
        }
      `}</style>
    </div>
  )
}

export default Headline