import React from 'react'
import './ScoreBoard.css' 

const ScoreBoard = ({xScore,oScore,tie,Whoplaying}) => {
    return (
        <>
            <div className='scoreBoard'> 
                  <span className={`X-score ${Whoplaying===true ? "xplay" : ""}`}>xPlaye : {xScore}</span>
                  <span className={`O-score ${Whoplaying===false ? "oplay" : ""}`}>oPlayes : {oScore}</span>
                  <span className='tie-score'>tieScore : {tie}</span>  
            </div>
        </>
    )
}

export default ScoreBoard