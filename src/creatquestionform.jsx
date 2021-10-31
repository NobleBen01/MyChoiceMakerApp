import React,{useState} from "react";

const CreateQuestionForm =(props)=>{

const [question, setQuestion] = useState({});

const handleTextInput = (e)=>{
  setQuestion({...question,[e.target.id]: e.target.value });
}



  return(
    <div>
        <h1>Questions</h1>
       <div>
        <input placeholder="Q:Enter your question here" style={{padding:"20px", width:"400px"}} id="question" onChange={handleTextInput}></input>
       </div>
       
       <h1>Options</h1>
       <div>
        <input placeholder="A:" className="Nonso" id="A" onChange={handleTextInput}></input>
       </div>
       <div>
        <input placeholder="B:" className="Nonso" id="B" onChange={handleTextInput}></input>
       </div>
       <div>
       <input placeholder="C:" className="Nonso" id="C" onChange={handleTextInput}></input>
       </div>

       <div className="button"> 
       <button onClick={()=>{props.answerQuestion(question)}}>ANSWER!</button>
       </div>
    </div>
  );
}


export default CreateQuestionForm