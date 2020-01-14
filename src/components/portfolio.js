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
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    img {
      object-fit: cover;
      height: 100%;
      width: 60%;
      margin-bottom: 40px;
    }

    .button {
      width: fit-content;
      display: flex;
      box-sizing: content-box;
      border: 2px solid var(--grayLight);
      border-radius: 8px;
      padding: 8px 24px;
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
      display: block;
      width: 45%;
      margin-bottom: 64px;

      img {
        height: unset;
        width: unset;
        margin-bottom: 16px;
      }

      .button {
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

  @media (min-width: 1024px) {
    .project-item {
      margin-bottom: 80px;

      .button {
        padding: 12px 32px;
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
          <div>
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
        <div className="project-item">
          <img src={example} alt="example" />
          <div>
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
        <div className="project-item">
          <img src={example} alt="example" />
          <div>
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
      </div>
    </Portfolio>
  )
}

export default portfolio
