import React from "react";



const AnsweredQuestion=(props)=>{


  return(
  <div>
    <p>{props.question.question}</p>
    <p><b>A</b>:<span style={{color:props.answered === "A"?"green":""}}>{props.question.A}</span></p>
    <p><b>B</b>:<span style={{color:props.answered === "B"?"green":""}}>{props.question.B}</span></p>
    <p><b>C</b>:<span style={{color:props.answered === "C"?"green":""}}>{props.question.C}</span></p>
    <button onClick={()=>{props.setShowAnswer(false)}}>Go back</button>
    </div>
  )
}

export default AnsweredQuestion