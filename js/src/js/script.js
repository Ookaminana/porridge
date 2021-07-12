const  questionList1 = {
      tests:[
         {       id: 1,
                     quest:"Первый вопрос",
                     answ:["Первый","Второй","Третий верный"],                      
                     right:3
              },
              {      id: 2,
                     quest:"Второй вопрос",
                     answ:["2Первый","2Второй верный","2Третий"],                     
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
               answ:["Первый2","Второй2 верный2","Третий",], 
               right:2
        },
        {      id: 3,
               quest:"Предупреждающие знаки имеют форму2",
               answ:["Первый2 верный2","Второй2","Третий",], 
               right:1
        },
       ]
}

const test1 = document.getElementById('1t')
const test2 = document.getElementById('2t')
const testBtn = document.getElementById('btn-test')

test1.addEventListener('click', (e) => {      
       setTitle(e.target.textContent)
       setTest(questionList1,0)
})
test2.addEventListener('click', (e) => {      
       setTitle(e.target.textContent)
       setTest(questionList2,0)
})

testBtn.addEventListener('click', () => {

})


function setTitle(title) {       
       
       let tit = document.getElementById('titleTest')       
       const test = document.getElementById('test')
       const start = document.getElementById('start')  
       const res = document.getElementById('res')  
       const test_num = document.getElementById('test_num')  
              
       test.style.display = "block" 
       start.style.display = "none"        
       res.style.display = "none"        

       tit.innerHTML = title;
       if(title === 'FIRST TEST')
       test_num.setAttribute('value', 1) 
       let i = 0;             
}

function setTest(obj,number_question) {
       const question = document.getElementById('question')
       const answers = document.getElementsByClassName('answer-text')
       const next = setQuestion(obj,number_question)

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
       const test = document.getElementById('test')
       const result = document.getElementById('res') 

       for(answer of answers){
              if(answer.checked){
                     // console.log(answer.getAttribute('value'));
                     console.log('number_question в проверку' + number_question.getAttribute('value'));
                     checkAnswer(number_question.getAttribute('value'),answer.getAttribute('value'))
                     answer.checked = false
              }             
       }
       
       number_question.setAttribute('value', k) 
       
       if(k < questionList1.tests.length){
              console.log('TEST!!!');
            setTest(k)  
       }else{
              alert('Поздравляю, тест завершен!')
              test.style.display = 'none'
              result.style.display = 'block'
       }
      
       
}

function checkAnswer(number_question,answer) { 
       console.log(`right ${questionList1.tests[number_question].right} & answer ${answer}`);     
       if(parseInt(answer) === parseInt(questionList1.tests[number_question].right)){
              alert('Ответ верный')
              const r_true = parseInt(document.getElementById('res_true').textContent) | 0              
              document.getElementById('res_true').innerHTML = r_true + 1
       }else{
              alert('Ответ неверный')
              const r_false = parseInt(document.getElementById('res_false').textContent) | 0
              document.getElementById('res_false').innerHTML = r_false + 1
       }        
}

function setQuestion(obj,number_question){                   
       const quest = {
              id: obj.tests[number_question].id,   
              quest: obj.tests[number_question].quest,          
              answ:obj.tests[number_question].answ,                      
              right:obj.tests[number_question].right,
       }
      
      return(quest)
}

