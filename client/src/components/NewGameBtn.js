import React from 'react';
import styled from 'styled-components'

const StyleNewGameBtn = styled.button`
width: ${props => props.width || '100px'};
height: ${props => props.height ||'50px'};
background-color: ${props => props.bgcolor || 'red'};
color: ${props => props.color || 'white'};
border-radius: 10px;
margin: ${props => props.margin || '1rem'};
border: 1px solid red;
`

const NewGameBtn = (props) => {
  return <StyleNewGameBtn {...props}>{props.name||'NEW GAME'}</StyleNewGameBtn>
};

export default NewGameBtn;
