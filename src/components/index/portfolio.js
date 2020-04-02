import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

import theGateway from "../../images/the-gateway.png"
import vicious from "../../images/vicious.png"
import reEntry from "../../images/re-entry.png"
import blackAlligator from "../../images/black-alligator.png"
import angeles from "../../images/angeles.jpg"
import accelerant from "../../images/accelerant.jpg"
import theKnick from "../../images/the-knick.jpg"

const Portfolio = styled.section`
  display: block;

  .project-list {
    display: block;
  }

  .project-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 40px;

    img {
      object-fit: cover;
      height: 100%;
      width: 60%;
      box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      margin-bottom: 0;
    }

    div {
      align-self: center;
    }

    .button {
      width: fit-content;
      display: flex;
      box-sizing: content-box;
      border: 1px solid var(--grayDark);
      border-radius: 8px;
      padding: 12px 24px;
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
      padding-bottom: 0;

      img {
        height: unset;
        width: 100%;
        margin-bottom: 16px;
      }

      .button {
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
  }

  @media (min-width: 1024px) {
    .project-item {
      margin-bottom: 80px;
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
          <img src={theGateway} alt="The Gateway" />
          <div>
            <h4>The Gateway</h4>
            <Link
              className="button"
              to="/projects/the-gateway"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={vicious} alt="Vicious" />
          <div>
            <h4>Vicious</h4>
            <Link
              className="button"
              to="/projects/vicious"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={reEntry} alt="Re-Entry" />
          <div>
            <h4>Re-Entry</h4>
            <Link
              className="button"
              to="/projects/re-entry"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={blackAlligator} alt="BLACK ALLIGATOR" />
          <div>
            <h4>BLACK ALLIGATOR</h4>
            <Link
              className="button"
              to="/projects/black-alligator"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={angeles} alt="Angeles" />
          <div>
            <h4>Angeles</h4>
            <Link
              className="button"
              to="/projects/angeles"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={accelerant} alt="Accelerant" />
          <div>
            <h4>Accelerant</h4>
            <Link
              className="button"
              to="/projects/accelerant"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
        <div className="project-item">
          <img src={theKnick} alt="The Knick" />
          <div>
            <h4>The Knick</h4>
            <Link
              className="button"
              to="/projects/the-knick"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </Portfolio>
  )
}

export default portfolio
