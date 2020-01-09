import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

const Blurb = styled.section`
  background-color: var(--grayGreen);
`

const blurb = () => {
  return (
    <Blurb className="container-md">
      <div className="col-12">
        <h2>
          WGA Screenwriter with over fifteen years of industry experience.
          Proven story analyst, script consultant, and literary manager.
        </h2>
      </div>
    </Blurb>
  )
}

export default blurb
