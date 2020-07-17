import React from 'react'
import Headline from '../components/headline'
import StyledP from '../components/p'
import texts from '../texts/home.json'
import P from '../components/p'
import Bullet from '../components/bullet'

const Home = () => {
  return (
    <div>
      <Headline/>
      {texts.map( text => 
        <P>
          {text.description}
          {text.bullets.map(
            bullet => <Bullet>{bullet.point}</Bullet>
          )}
        </P>
      )}
    </div>
  )
}

export default Home