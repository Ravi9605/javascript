##project 01
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach( (button)=>{
  console.log(button)

  button.addEventListener('click', (e)=>{
      console.log(e);
      console.log(e.target)
      if(e.target.id == 'grey'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id == 'white'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id == 'blue'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id == 'yellow'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id == 'purple'){
        body.style.backgroundColor = e.target.id;
      }

  })
})


```



##project 02
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

 
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Give the valid Height';
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Give the valid weight';
  }
  else{
    const BMI =  (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${BMI}</span>`;
    if(BMI <18.6){
      results.outerHTML =`Under Weight ${BMI}`
    }
    else if(BMI >=18.6 && BMI <=24.9){
      results.outerHTML=`Normal Range ${BMI}`
    }
    else{
      results.outerHTML=`Overweight ${BMI}`
    }
  
  }
});

```

##project 03
```javascript
const clock = document.getElementById('clock');


 setInterval(function(){
    let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString();
 }, 1000)


```

##project 4
```javascript

  let randomNumber = parseInt(Math.random()*100+1)

  const submit = document.querySelector('#subt'); 
  const userinput = document.querySelector('#guessField'); 
  const guessSlot = document.querySelector('.guesses'); 
  const remaining = document.querySelector('.lastResult'); 
  const lowOrHi = document.querySelector('.lowOrHi'); 
  const startover = document.querySelector('.resultParas'); 

  const p =document.createElement('p')


  let prevGuess = []
  let numGuess = 1

  let playGame = true
  if(playGame){
    submit.addEventListener('click', (e)=>{
      e.preventDefault();
    const guess= parseInt(userinput.value);
    validateGuess(guess);
    })
  }

  function validateGuess(guess){//check the vlaue b/w the 1 and 100 and the value is number or not 
    if(isNaN(guess)){
      alert("please Enter a valid number")
    }else if(guess<1){
      alert("please Enter a number more than 1")
    }
    else if(guess>100){
      alert("please Enter a number less than 100")
    }
    else{
      prevGuess.push(guess)
      if(numGuess === 11){
          displayGuess(guess)
          displaymessage(`Game Over Random number was ${randomNumber}`)
          endGame()
      }else{
        displayGuess(guess)
        checkGuess(guess)
      }

    }
  }

  function checkGuess(guess){//check guess the random value is equal or not  or high low 
     if(guess ===randomNumber){
       displaymessage(`You guessed it right`)
       endGame()
     }else if(guess < randomNumber){
       displaymessage(`Number is Tooo low`);
     }else if(guess > randomNumber){
      displaymessage(`Number is Tooo High`);
    }
     
  }

  function displayGuess(guess){// value clean for next value 
     userinput.value = ''
     guessSlot.innerHTML += `${guess}   `;
     numGuess++;
     remaining.innerHTML=`${11-numGuess}`
  }


  function displaymessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`

  }


  function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startover.appendChild(p)
    playGame = false
    newGame()
  }

  function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', (e)=>{
      randomNumber = parseInt(Math.random()*100+1);
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML =''
      remaining.innerHTML=`${11-numGuess}`
      userinput.removeAttribute('disabled')
      startover.removeChild(p)

      playGame = true
    })

  }


```
##project 5
```javascript
console.log('Project 5');

const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th> 
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '?'space' : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  
  `;
});

```

##project 6

```javascript

//genreate a random color 
const randomcolor = function(){
  const hex ='0123456789ABCDEF';
  let color = '#';
  for(let i = 0 ; i< 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};
let intervlalid;
const startchangingcolor = function(){
   if(!intervlalid){
    intervlalid = setInterval(changeBgColor, 1000);
   }
  
   function changeBgColor(){
    document.body.style.backgroundColor = randomcolor();

   }
};

const stopchangingcolor = function(){
   clearInterval(intervlalid);
   intervlalid = null
  
};
document.querySelector('#start').addEventListener('click', startchangingcolor)

document.querySelector('#stop').addEventListener('click', stopchangingcolor)

```

