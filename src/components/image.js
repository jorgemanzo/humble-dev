import React from 'react'

const Selfie = (props) => {
    
  return (
    <div>
      <img src={props.imgSrc} alt={props.altText}/>
      <br/>
      <em>{props.captionText}</em>
      <style jsx>{`
          img {
            width: 203px;
            height: 203px;
            border-radius: 25px;
          }
      `}</style>
    </div>
  )
}

export default Selfie