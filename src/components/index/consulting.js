import React from "react"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

const Consulting = styled.section`
  display: block;

  p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const consulting = () => {
  return (
    <Consulting className="container-lg">
      <div className="col-3">
        <h3>Consulting</h3>
      </div>
      <div className="col-9">
        <p>
          I've optioned over half a dozen original projects in film and
          television and I've been hired to rewrite screenplays ranging from $3M
          contained thrillers to $70M sci-fi blockbusters. I've also worked as a
          professional script analyst for studios like Alcon and Endemol Shine
          and my Black List script THE GATEWAY is in post-production and stars
          Olivia Munn, Frank Grillo, Bruce Dern, Taryn Manning, Shea Whigham,
          Keith David, and Mark Boone Junior.
        </p>
      </div>
    </Consulting>
  )
}

export default consulting
