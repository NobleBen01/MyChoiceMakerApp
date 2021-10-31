// import React,{useState} from 'react';
import './App.css';
import Createquestionform from "./creatquestionform";
import AnsweredQuestion from "./answeredQuestion";
import Popular from "./popular.jsx"

function App() {

const [questions, setQuestions] = useState([]);
const [currentAnswer, setCurrentAnswer] = useState("");
const [currentQuestion, setCurrentQuestion] = useState({});


const [showAnswer, setShowAnswer] = useState(false);
const [showPopular, setShowPopular] = useState(false); 

const answerRange = ["A", "B", "C"];


const generateRandomAnswer=()=>{
  const pick = Math.floor(Math.random() * 3);
  setCurrentAnswer(answerRange[pick]);
  setShowAnswer(true)
}

const answerQuestion =(question)=>{
  setQuestions([...questions, question]);
  setCurrentQuestion(question);
  generateRandomAnswer();
}



  return (
    <main>
    <div>
    <button onClick={()=>{setShowPopular(true)}}>See Popular Questions</button>
    </div>
     {showPopular?
     <Popular setShowPopular={setShowPopular} questions={questions}/>: 
     showAnswer?
     <AnsweredQuestion question={currentQuestion} answered={currentAnswer} setShowAnswer={setShowAnswer}/>:
     <Createquestionform answerQuestion={answerQuestion}/>
     }
    </main>
  );
}

export default App;