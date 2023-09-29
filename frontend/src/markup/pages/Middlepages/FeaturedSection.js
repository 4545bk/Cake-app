import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from '../../Components/app.elements'
import Slider from '../../Components/Slider/Slider'

import profileImg1 from '../images/aa.png'
import profileImg2 from '../images/bb.png'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-blue: hsl(240, 38%, 20%);
    --grayish-blue: hsl(240, 18%, 77%);
  }

  body {
    background: #f2f2f2;
  }
`

const TESTIMONIALS = [{
  quote: '“"I was truly surprised by the incredible talent and creativity of the cake designer at this bakery. She is amazingly insane in making and designing cakes Not only did it look stunning, but it tasted absolutely delicious." ”',
  name: '@shegergebeta',
  title: 'influencer',
  photo: profileImg1,
  id: 1234567,
},
{
  quote: '“ I have never seen someone so passionate and dedicated to their craft as the cake designer at this bakery.”',
  name: 'EBC',
  title: '',
  photo: profileImg2,
  id: 2345678,
},


]

function FeaturedSection() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Slider testimonials={TESTIMONIALS.slice(0, 2)} large />
        <div style={{ height: '10rem' }} />
      </StyledWrapper>
    </>
  )
}

export default FeaturedSection