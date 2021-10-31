import React,{useState, useEffect} from "react"


const Popular =(props)=>{

  const [popularQuestions, setPopular] = useState([])



  const getPopularQuestions = ()=>{
    let questions = props.questions;
    let popular = [];
    if(questions.length > 0){
       for (let index = 0; index <= questions.length; index++) {
        popular.push({name:questions[0].question, vote: questions.filter(q=> q.question.toLowerCase() === questions[0].question.toLowerCase()).length})
        questions = questions.filter(q=> q.question.toLowerCase() !== questions[0].question.toLowerCase())
        index = 0;
      }
let sortedPopularQuestions = popular.sort(function(a, b){return b.vote-a.vote});

      setPopular(sortedPopularQuestions);
      
    }  }

  useEffect(()=>{
    getPopularQuestions()
},[])


  return(
    <div>
  
   {popularQuestions.length> 0 ? 
   <ol>
          {
        popularQuestions.map((popularQuestion, i)=>{
          return(
            <li>{popularQuestion.name} <b>{popularQuestion.vote}</b></li>
          )
        })
}
    </ol>
    : <p>No Questions Avaliable</p>}
      <button onClick={()=>{props.setShowPopular(false)}}>Go back</button>
    </div>
  )
}

export default Popular;