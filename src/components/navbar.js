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
        </StyledUl>
      </nav>
    </div>
  )
}

export default Navbar