import React from "react"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas, faFileDownload } from "@fortawesome/free-solid-svg-icons"

library.add(fas, faFileDownload)

const kebabCase = require("lodash.kebabcase")

const Content = styled.section`
  display: block;
  flex: 1 0 auto;
  padding-top: 64px;

  .left-column {
    margin-bottom: 48px;

    .details {
      margin-bottom: 48px;
    }

    p {
      margin-bottom: 24px;
    }

    .btn-wrapper {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .download-btn {
      display: flex;
      width: 45%;
      font-family: "Roboto";
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: normal;
      text-align: center;
      text-decoration: none;
      color: var(--grayDark);
      background: transparent;
      border: 1px solid var(--grayDark);
      border-radius: 8px;
      padding: 12px 24px;
      margin-bottom: 16px;
    }

    .icon {
      margin-top: auto;
      margin-bottom: auto;
      margin-right: 12px;
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

  @media (min-width: 425px) {
    .left-column {
      display: flex;
      justify-content: space-between;

      .details {
        margin-bottom: 0;
      }

      p {
        margin-bottom: 24px;
      }

      .btn-wrapper {
        display: block;
        width: 40%;
      }

      .download-btn {
        display: block;
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    margin-top: 80px;
    padding-top: 64px;

    .left-column {
      display: block;
      margin-right: 40px;

      .details {
        margin-bottom: 48px;
      }

      p {
        margin-bottom: 24px;
      }

      .btn-wrapper {
        width: 100%;
      }

      .download-btn {
        font-size: 14px;
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

    .right-column {
      .description {
        margin-bottom: 64px;
      }

      .logline p {
        font-size: 16px;
        padding: 16px;
      }

      h6 {
        margin-bottom: 8px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1280px) {
    .left-column {
      .download-btn {
        font-size: 16px;
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
        <div className="btn-wrapper">
          {props.fileSource ? (
            <a
              className="download-btn"
              href={props.fileSource}
              download={kebabCase(props.title)}
            >
              <FontAwesomeIcon className="icon" icon={faFileDownload} />
              Download {props.fileName}
            </a>
          ) : null}
          {props.fileSourceTwo ? (
            <a
              className="download-btn"
              href={props.fileSourceTwo}
              download={kebabCase(props.title + props.fileNameTwo)}
            >
              <FontAwesomeIcon className="icon" icon={faFileDownload} />
              Download {props.fileNameTwo}
            </a>
          ) : null}
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
