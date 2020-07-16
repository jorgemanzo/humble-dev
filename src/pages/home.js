import React from 'react'
import Headline from '../components/headline'
import StyledP from '../components/p'
import texts from '../texts/home.json'

const Home = () => {
  return (
    <div>
      <Headline/>
      {texts.map(text => <StyledP>{text.value}</StyledP>)}
    </div>
  )
}

export default Home