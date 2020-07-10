import React from 'react'

const P = (props) => {

  return (
    <div>
      <p>{props.text}</p>
      <style jsx>{`
        p {
          margin-left: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
          margin-right: calc(15px + (230 - 15) * ((100vw - 300px) / (1600 - 300)));
          margin-top: 35px;
          text-align: left;
          font-size: calc(12pt + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
          padding: 15px;
        }
      `}</style>
    </div>
  )
}

export default P