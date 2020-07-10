import React from 'react'

const Selfie = (props) => {
    
  return (
    <div>
      <img src={props.imgSrc} alt={props.altText}/>
      <br/>
      <em>{props.captionText}</em>
      <style jsx>{`
          img {
            width: calc(100px + (200 - 100) * ((100vw - 300px) / (1600 - 300)));
            height: calc(100px + (200 - 100) * ((100vw - 300px) / (1600 - 300)));
            border-radius: 25px;
          }
      `}</style>
    </div>
  )
}

export default Selfie