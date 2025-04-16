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