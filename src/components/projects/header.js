import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "../../colors.css"
import "../../global.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

library.add(fas, faArrowLeft)

const Header = styled.section`
  display: flex;
  align-items: flex-end;
  background-color: var(--grayGreen);

  .back-btn {
    position: absolute;
    top: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    text-decoration: none;
    color: var(--grayLight);
    background: transparent;
    border-radius: 8px;

    .icon {
      margin-right: 12px;
    }
  }

  img {
    box-shadow: 2px 8px 40px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    margin-right: 40px;
    margin-bottom: -80px;
  }

  h2 {
    padding-bottom: 48px;
  }

  @media (min-width: 768px) {
    .back-btn {
      position: absolute;
      top: 40px;
      font-size: 18px;
      padding: 12px 12px;
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;

      .icon {
        margin-right: 12px;
      }

      :hover {
        background-color: var(--grayLightest);
        -webkit-transition: all 200ms ease-in-out;
        -mox-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
      }

      :active {
        background: transparent;
      }
    }
  }
`

const header = props => {
  return (
    <Header className="container-lg">
      <Link className="back-btn" to="/">
        <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        Back
      </Link>
      <img className="col-3" src={props.coverArt} alt="Cover art" />
      <h2 className="col-9">{props.title}</h2>
    </Header>
  )
}

export default header
