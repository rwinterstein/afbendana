import React from "react"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

import Typewriter from "../../images/typewriter.jpg"

const Hero = styled.section`
  background-image: url(${Typewriter});
  background-position: 50% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #48595310;
  background-blend-mode: darken;
`

const hero = () => {
  return (
    <Hero className="container-sm">
      <div className="col-12">
        <h1>
          ALEX
          <br />
          FELIX
          <br />
          BENDAÑA
        </h1>
      </div>
    </Hero>
  )
}

export default hero
