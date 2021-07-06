const  questionList1 = {
      tests:[
         {       id: 1,
                     quest:"Первый вопрос",
                     answ:["Первый","Второй","Третий верный"],                      
                     right:3
              },
              {      id: 2,
                     quest:"Второй вопрос",
                     answ:["2Первый","2Второй","2Третий верный"],                     
                     right:2
              },
              {      id: 3,
                     quest:"Предупреждающие знаки имеют форму",
                     answ:["Трегугольника","Квадрата","Круга"],                     
                     right:1
              },         
      ]        
}

const  questionList2 = {
       tests: [
       {       id: 1,
               quest:"Первый вопрос2",
               answ:["Первый2","Второй2","Третий верный2",],               
               right:3
        },
        {      id: 2,
               quest:"Второй вопрос2",
               answ:["Первый2","Второй2","Третий верный2",], 
               right:2
        },
        {      id: 3,
               quest:"Предупреждающие знаки имеют форму2",
               answ:["Первый2","Второй2","Третий верный2",], 
               right:1
        },
       ]
}

function changeTitle(title) {       
       
       let tit = document.getElementById('titleTest')
       const question = document.getElementById('question')
       const test = document.getElementById('test')
       const start = document.getElementById('start')  
       const answers = document.getElementsByClassName('answer-text')
       // let number_question = document.getElementById('number_question')
       
       if(title === 'FIRST TEST'){              
              let quest1 = questionList1.tests[0].quest;
              question.innerHTML = quest1
       }              
       else if(title === 'SECOND TEST'){              
              let quest1 = questionList2.tests[0]?.quest
              question.innerHTML = quest1
       }
              
       test.style.display = "block" 
       start.style.display = "none"        

       tit.innerHTML = title;
       let i = 0;
       
       for(answer of answers){
              if(title === 'FIRST TEST'){                                         
                     answer.innerHTML = questionList1.tests[0].answ[i]
              }
              else if(title === 'SECOND TEST'){
                     answer.innerHTML = questionList2.tests[0].answ[i]
              }
              i++;
       }
             
}

function setTest(number_question) {
       const question = document.getElementById('question')
       const answers = document.getElementsByClassName('answer-text')

       const next = selectQuestion(number_question)
       console.log(next);
       let i = 0
       for(answer of answers){
              answer.innerHTML = next.answ[i]
              i++
       }
       question.innerHTML = next.quest

}


function nextQuestion() {
       const number_question = document.getElementById('number_question')   
       const k = parseInt(number_question.getAttribute('value')) + 1 
       const answers = document.getElementsByClassName('answer-item')
       // console.log(questionList);
       for(answer of answers){
              if(answer.checked){
                     console.log(answer.getAttribute('value'));
                     checkAnswer(number_question.getAttribute('value'),answer.getAttribute('value')-1)
              }             
       }
       
       number_question.setAttribute('value', k) 
       setTest(k)
       
}

function checkAnswer(number_question,answer) {      
       if(answer === questionList1.tests[number_question].right){
              alert('Ответ верный')
       }else{
              alert('Ответ неверный')
       }        
}

function selectQuestion(number_question){
       // const number_question = document.getElementById('number_question')  
            
       const quest = {
              id: questionList1.tests[number_question].id,   
              quest: questionList1.tests[number_question].quest,          
              answ:questionList1.tests[number_question].answ,                      
              right:questionList1.tests[number_question].right,
       }
      
      return(quest)
}

