import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyleMessage = styled.h3`
color: ${props => props.color || 'gray'};
margin: ${props => props.margin || '1rem'};
`

const Message = (props) => {
  const point = useSelector(state => state.point)
  return <StyleMessage {...props}>{props.name || `AMAKIDS TEST GAME POINT: ${point}`}</StyleMessage>
};

export default Message;
