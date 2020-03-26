import React from "react"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas, faFileDownload } from "@fortawesome/free-solid-svg-icons"

library.add(fas, faFileDownload)

const kebabCase = require('lodash.kebabcase');

const Content = styled.section`
  display: flex;
  margin-top: 80px;
  padding-top: 64px;

  .left-column {
    margin-right: 40px;

    .details {
      margin-bottom: 48px;
    }

    p {
      margin-bottom: 24px;
    }
  }

  .right-column {
    .description {
      margin-bottom: 64px;
    }

    .logline p {
      font-family: "Roboto Mono";
      font-size: 16px;
      line-height: 150%;
      background: var(--grayLightest);
      padding: 16px;
    }

    h6 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 0;
    }
  }

  .download-btn {
    display: flex;
    width: fit-content;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: normal;
    text-decoration: none;
    color: var(--grayDark);
    background: transparent;
    border: 1px solid var(--grayDark);
    border-radius: 8px;
    padding: 12px 24px;
    -webkit-transition: all 200ms ease-in-out;
    -mox-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }

  .icon {
    margin-right: 12px;
  }

  @media (min-width: 768px) {
    .download-btn {
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;

      :hover {
        background-color: var(--grayLightest);
        border-color: var(--grayLightest);
        -webkit-transition: all 200ms ease-in-out;
        -mox-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
      }

      :active {
        background-color: transparent;
        border-color: var(--grayLightest);
      }
    }
  }
`

const content = props => {
  return (
    <Content className="container-lg">
      <div className="left-column col-3">
        <div className="details">
          <div className="role">
            <h6>Role</h6>
            <p>{props.role}</p>
          </div>
          <div className="info">
            <h6>Info</h6>
            <p>{props.info}</p>
          </div>
        </div>
        <div>
          <a className="download-btn" href={props.fileDownload} download={kebabCase(props.title)}>
            <FontAwesomeIcon className="icon" icon={faFileDownload} />
            Download PDF
          </a>
        </div>
      </div>
      <div className="right-column col-8">
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="logline">
          <h6>Logline</h6>
          <p>{props.logline}</p>
        </div>
      </div>
    </Content>
  )
}

export default content
