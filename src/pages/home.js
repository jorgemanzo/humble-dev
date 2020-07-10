import React from 'react'
import Headline from '../components/headline'
import P from '../components/p'
import texts from '../texts/home.json'

const Home = (props) => {

  return (
    <div>
      <Headline/>
      {texts.map(text => <P text={text.value}/> )}
    </div>
  )
}

export default Home