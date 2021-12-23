import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
justify-content: ${props => props.justify || 'center'};
align-items: ${props => props.align || 'center'};
flex-direction: ${props => props.direction || 'column'};
margin: ${props => props.margin || 0};
`


const Container = (props) => {
  return <StyledContainer {...props} />
};

export default Container;
