import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setPoint} from '../redux/actions/point.action'

const DELAY = 500;


const StyledMeshElement = styled.div`
width: ${props => props.width || '100px'};
height: ${props => props.height ||'100px'};
background-color: ${props => props.bgcolor || 'red'};
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.color ||'black'};
border-radius: 10px;
margin: ${props => props.margin || 0};
cursor: pointer;
`

const MeshElement = (props) => {
  const dispatch = useDispatch()
  const game = useSelector(state => state.game)
  const [colorBg, setColor] = useState('gray')
  useEffect(()=>{
    setName('')
    setColor('gray')
  },[game])
  
  const [name, setName] = useState('')
  
  function checkResult(){
    if(props.end){
      setName('YES')
      setColor('green')
      dispatch(setPoint())
      setTimeout(()=>{
        props.newGame()
      },DELAY)
    }
    else{
      setName('FALSE')
      setColor('red')
      setTimeout(()=>{
        props.newGame()
      },DELAY)
    }
  }

  return <StyledMeshElement onClick={checkResult} {...props} bgcolor={colorBg}>{name || props.name}</StyledMeshElement>
};

export default MeshElement;
