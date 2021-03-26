import React,{useState,useRef,useEffect} from 'react'
import './Elevator.css'
import LIFT from './Lift'
import Button from './Button'
import { ImArrowUp,ImArrowDown} from "react-icons/im";


function Elevator() {

  let [CurrentFloor,setCurrentFloor]=useState(0)
  const PrevFloor=usePrevious(CurrentFloor);

  function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  
  
const groundFloorUp=()=>{
  setCurrentFloor(0)
}
const FirstFloorDown=()=>{
  setCurrentFloor(1)
}
const FirstFloorUp=()=>{
  setCurrentFloor(1)
}
const SecondFloorDown=()=>{
  setCurrentFloor(2)
}
   
    return (
      <React.StrictMode>
      <div className='main'>
           <div>
              <div className='Level2'>
                <h1>LEVEL-2</h1>  
                <Button buttonSize='btn--medium' buttonColor='primary'onClick={SecondFloorDown}><ImArrowDown/></Button>
              </div>
              <div className='Level1'>
                <h1>LEVEL-1</h1>
                <div className='adjust-btn'>
                <Button buttonSize='btn--medium' buttonColor='primary' onClick={FirstFloorUp}><ImArrowUp/></Button>
                <Button buttonSize='btn--medium' buttonColor='primary' onClick={FirstFloorDown}><ImArrowDown/></Button>
                </div>
              </div>
              <div className='Level0'>
                <h1>LEVEL-0</h1>
                <Button buttonSize='btn--medium' buttonColor='primary' onClick={groundFloorUp}><ImArrowUp/></Button>
             </div>
           </div>

           <div >
              <LIFT PrevFloor={PrevFloor} CurrentFloor={CurrentFloor}/>
           </div>

      </div>
      </React.StrictMode>
    );
   }

 export default Elevator 
   