import React from "react"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

const Content = styled.section`
  display: flex;
  margin-top: 80px;
  padding-top: 64px;

  .left-column {
    margin-right: 40px;
  }

  .right-column {
    .description {
      margin-bottom: 64px;
    }

    h6 {
      margin-bottom: 8px;
    }
  }
`

const content = props => {
  return (
    <Content className="container-lg">
      <div className="left-column col-3">
        <div className="role">
          <h6>Role</h6>
          <p>{props.Role}</p>
        </div>
        <div className="info">
          <h6>Info</h6>
          <p>{props.Info}</p>
        </div>
      </div>
      <div className="right-column col-8">
        <div className="description">
          <p>{props.Description}</p>
        </div>
        <div className="logline">
          <h6>Logline</h6>
          <p>{props.Logline}</p>
        </div>
      </div>
    </Content>
  )
}

export default content
