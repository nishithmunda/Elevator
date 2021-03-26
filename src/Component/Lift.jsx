import React from 'react'
import './Elevator.css'

const PrevFloor =[0,1,2];
const CurrentFloor =[0,1,2];

function Lift(props){

    const checkPrevFloor=PrevFloor.includes(props.PrevFloor)?props.PrevFloor:[0]
    const checkCurrentFloor=PrevFloor.includes(props.CurrentFloor)?props.CurrentFloor:CurrentFloor[0]

    return(
       <div className='elevator-main'> 
            <div className='elevator-container'>
            <div className={`elevator from${checkPrevFloor}${checkCurrentFloor}`}>
                <div className='name'>
                   <h1>ELEVATOR</h1>
                </div>
            </div>

            </div>
            <div className='INDICATOR'>
                <h1>PREVIOUS  FLOOR ={checkPrevFloor}</h1>
                <h1>MOVING TO FLOOR ={checkCurrentFloor}</h1>
            </div>
       </div>

  
    )
}
export default Lift