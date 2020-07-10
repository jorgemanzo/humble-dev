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
          justify-content: center;
          align-items: center;
        }
        
        .root {
          margin-top: 25px;
          margin-left: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
          margin-right: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
        }
      `}</style>
    </div>
  )
}

export default Headline