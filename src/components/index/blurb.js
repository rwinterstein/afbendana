import React from "react"
import styled from "styled-components"

import "../../styles/colors.css"
import "../../styles/global.scss"

const Blurb = styled.section`
  background-color: var(--grayGreen);
`

const blurb = () => {
  return (
    <Blurb className="container-md">
      <div className="col-12">
        <h2>
          WGA Screenwriter with over fifteen years of industry experience.
          Proven story analyst, script consultant, and literary manager. I write
          character-driven thrillers, sci-fi, and historical dramas that deal
          with social, medical, and environmental issues. I dig high-concept
          stories with hard edges and dark atmospheres.
        </h2>
      </div>
    </Blurb>
  )
}

export default blurb
