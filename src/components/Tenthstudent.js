import React from 'react'

function Tenthstudent(props) {
  return (
    <div>
     <h1>Tenth Marks</h1>
     <h2>{` ${props.name} ${props.engMarks} ${props.engMarks} ${props.telMarks} ${props.hinMarks} 
     ${props.matMarks} ${props.sciMarks} `}</h2>
    </div>
  )
}

export default Tenthstudent