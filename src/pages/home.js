import React from 'react'
import Headline from '../components/headline'
import texts from '../texts/home.json'
import P from '../components/p'
import Bullet from '../components/homeBullet'

const Home = () => {
  return (
    <div>
      <Headline/>
      {texts.map( (text, index) => 
        <P key={index}>
          {text.description}
          {text.bullets.map(
            (bullet, bulletIndex) => <Bullet key={bulletIndex}>{bullet.point}</Bullet>
          )}
        </P>
      )}
    </div>
  )
}

export default Home