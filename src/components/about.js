import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

const About = styled.section`
  display: block;

  p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const about = () => {
  return (
    <About className="container-lg">
      <div className="col-3">
        <h3>About</h3>
      </div>
      <div className="col-9">
        <p>
          I write character-driven thrillers, sci-fi, and historical dramas that
          deal with social, medical, and environmental issues. I dig
          high-concept stories with hard edges and dark atmospheres.
        </p>
        <p>
          I've optioned over half a dozen original projects in film and
          television and I've been hired to rewrite screenplays ranging from $3M
          contained thrillers to $70M sci-fi blockbusters. My project THE
          GATEWAY is currently in production and stars Olivia Munn, Frank
          Grillo, Bruce Dern, Taryn Manning, Shea Whigham, Keith David, and Mark
          Boone Junior.
        </p>
        <p>
          I've worked as a professional script analyst at companies like Alcon,
          Endemol Shine, and ScriptShadow.
        </p>
      </div>
    </About>
  )
}

export default about
