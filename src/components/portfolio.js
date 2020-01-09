import React from "react"
import styled from "styled-components"

import "../colors.css"
import "../global.scss"

import example from "../images/example-project.png"

const Portfolio = styled.section`
  display: block;

  .project-list {
    display: block;
  }

  .project-item {
    display: block;

    img {
      margin-bottom: 16px;
    }

    .button {
      width: fit-content;
      display: flex;
      box-sizing: content-box;
      border: 1px solid var(--grayLight);
      border-radius: 8px;
      padding: 8px 16px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    .project-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .project-item {
      width: 45%;
      margin-bottom: 40px;

      .button {
        padding: 12px 24px;
        -webkit-transition: all 200ms ease-in-out;
        -mox-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;

        :hover {
          background-color: var(--grayLightest);
          border-color: var(--grayDark);
          -webkit-transition: all 200ms ease-in-out;
          -mox-transition: all 200ms ease-in-out;
          -o-transition: all 200ms ease-in-out;
          transition: all 200ms ease-in-out;
        }

        :active {
          background-color: var(--white);
          border-color: var(--grayLight);
        }
      }
    }
  }
`

const portfolio = () => {
  return (
    <Portfolio className="container-lg">
      <div className="col-3">
        <h3>Portfolio</h3>
      </div>
      <div className="col-9 project-list">
        <div className="project-item">
          <img src={example} alt="example" />
          <h4>Project Name</h4>
          <a
            className="button"
            href="/404"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <div className="project-item">
          <img src={example} alt="example" />
          <h4>Project Name</h4>
          <a
            className="button"
            href="/404"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <div className="project-item">
          <img src={example} alt="example" />
          <h4>Project Name</h4>
          <a
            className="button"
            href="/404"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </Portfolio>
  )
}

export default portfolio
