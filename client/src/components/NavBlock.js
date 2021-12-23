import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'



const StyledNavBlock = styled.div`
width: ${props => props.width || '100px'};
height: ${props => props.height ||'100px'};
background-color: ${props => props.bgcolor || 'red'};
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.color ||'black'};
border-radius: 10px;
margin: ${props => props.margin || 0};
transition: 0.2s;
&: hover {
  background-color: red;
}
`

const NavBlock = (props) => {
  const game = useSelector(state => state.game)
  useEffect(() => {
   const timer = setTimeout(()=>{
      setShow(true)
      return 
    },props.delay||0)
    return (()=>{
      setShow(false)
      clearTimeout(timer)
    })
  },[game])

  const [show, setShow] = useState(false)

  return <StyledNavBlock {...props}>{show? props.name: ""}</StyledNavBlock>
};

export default NavBlock;
