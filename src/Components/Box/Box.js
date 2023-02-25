import React from 'react'
import './Box.css'

const Box = ({value,id,onClick}) => {
    return (
        <>
            <button onClick={onClick} kye={id} className={ `box ${value==="X" ? "X" : "O"}`} >{value}</button> 
        </>
    )
}

export default Box