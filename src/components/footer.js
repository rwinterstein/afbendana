import React from "react"
import styled from "styled-components"

import "../styles/colors.css"
import "../styles/global.scss"

const Footer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border-top: 1px solid var(--grayLight);
  margin-top: 80px;

  .contact-options {
    display: flex;
    justify-content: space-between;
    width: 180px;
    font-size: 1.5em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;

    a {
      justify-content: center;
      box-sizing: content-box;
      color: var(--gray);
      border-radius: 8px;
      padding: 12px 16px;
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;

      :hover {
        color: var(--grayDark);
        background-color: var(--grayLightest);
        -webkit-transition: all 200ms ease-in-out;
        -mox-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
      }

      :active {
        background-color: var(--white);
      }
    }

    @media (min-width: 768px) {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const footer = () => {
  return (
    <Footer className="container-footer">
      <div className="copyright">
        © Alex Bendaña - {new Date().getFullYear()}
      </div>
      <div className="contact-options">
        <a href="mailto:analog@afbendana.com?subject=Hello!">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/alex-bendaña-42a457179/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </Footer>
  )
}

export default footer
