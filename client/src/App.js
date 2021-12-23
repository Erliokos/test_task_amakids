import { useEffect, useState } from 'react';
import style from 'styled-components'
import Container from './components/Container';
import MeshElement from './components/MeshElement';
import Message from './components/Message';
import NewGameBtn from './components/NewGameBtn';
import { useDispatch } from 'react-redux'
import {setGame} from './redux/actions/game.action'
import { useSelector } from 'react-redux'
import NavBlock from './components/NavBlock';


const GAME_FIELD_X = 3; 
const GAME_FIELD_Y = 3;
const DIFFICULTY = 12;
const SPEED = 200;

const DIRECT = {
  1: ["↑",[-1,0]],
  2: ["→",[0,1]],
  3: ["↓",[1,0]],
  4: ["←",[0,-1]],
}



const Wrapper = style.div`
width: 100vw;
min-height: 100vh;
padding: 2rem;
background: black;
color: white;
`

function App() {

  function chekStep (now,step){
    if(now[0]+step[0]>=0 && now[0]+step[0]<GAME_FIELD_Y && now[1]+step[1]>=0 && now[1]+step[1]<GAME_FIELD_X){
      return true;
    }
    return false
  }


  const greeting = 'ДАВАЙ ИГРАТЬ'.split('')
  const dispatch = useDispatch()
  const gameLocal = useSelector(state=>state.game)
  const [startPoint, setStartPoint] = useState([1000,1000])
  const [endPoint,setEndPoint] = useState([1000,1000])
  const [viewRigthAnswer, setAnswer] = useState(false)
  
  


  


  useEffect(()=>{

    
  },[gameLocal])
  
  

  function newGame(){
    let stPoint = [Math.floor(Math.random() * (GAME_FIELD_Y)),Math.floor(Math.random() * (GAME_FIELD_X))]
    setStartPoint(stPoint)


    const game = ((new Array(DIFFICULTY).fill('0').map(el=>{
      let num = Math.floor(Math.random() * 4 + 1)
      
      while(!chekStep(stPoint,DIRECT[num][1])){

        num = Math.floor(Math.random() * 4 + 1)
      }
      stPoint = [stPoint[0]+DIRECT[num][1][0],stPoint[1]+DIRECT[num][1][1]]
      return num;
    })))
    setEndPoint(stPoint)
    console.log(stPoint);
    dispatch(setGame(game))
  }

  const [field, setField] = useState(new Array(GAME_FIELD_Y).fill(new Array(GAME_FIELD_X).fill('')))
  return (
    <Wrapper>
        <Container>
          <Message/>
          {field.map((el, ind)=>{
            
            return <Container key={ind} direction={'row'}>{el.map((e, i)=>{
              let name = ''
              let end = 0;
              if(startPoint[0]===ind && startPoint[1]===i) name = "START"
              if(endPoint[0]===ind && endPoint[1]===i) end = 1
              return <MeshElement key={+`100${ind}${i}`} margin={'4px'} end={end} newGame={newGame} name={name || ''}/>
            })}</Container>
          })}
                  <Container direction={'row'}>
          {new Array(DIFFICULTY).fill('').map((el,index) => {
            return <NavBlock 
            key ={`${index}1234`}
            width={'30px'} 
            height={'30px'} 
            bgcolor={"gray"}
            margin={'1px'}
            delay={index*SPEED}
            name = {gameLocal.length? DIRECT[gameLocal[index]][0]: greeting[index]}
             />
          })}
        </Container>
        <NewGameBtn onClick={newGame}/>
        </Container>

    </Wrapper>
  );
}

export default App;
