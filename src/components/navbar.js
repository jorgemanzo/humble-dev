import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Navbar = () => {
  const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    @media (max-width: 500px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `

  const StyledLi = styled.li`
    float: left;
    & a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    & a:hover {
      background-color: #111;
    }
  `
  const StyledRightLi = styled.li`
    float: right;
    background-color: #3689e6;
    & a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    & a:hover {
      background-color: #8cd5ff;
      color: #000000;
    }
  `
  return (
    <div>
      <nav>
        <StyledUl>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/resume">Resume</Link>
          </StyledLi>
          <StyledLi>
            <a href="https://github.com/jorgemanzo">GitHub</a>
          </StyledLi>
          <StyledLi>
            <a href="https://linkedin.com/in/manzoj">LinkedIn</a>
          </StyledLi>
          <StyledRightLi>
            <a href="https://github.com/jorgemanzo/humble-dev">Made in React</a>
          </StyledRightLi>
        </StyledUl>
      </nav>
    </div>
  )
}

export default Navbar