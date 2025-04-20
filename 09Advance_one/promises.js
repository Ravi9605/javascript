// const promiseOne = new Promise(function(resolve, reject){
//       //Do an async task
//       //CB calls, cryptography, network
//       setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//       }, 1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async is run now");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async prmoise consumed");
    
// })


// const prmoiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Ravi Binjhade", email: "binjhaderavi04@gmail.com"})
//     },1000)
// })

// prmoiseThree.then(function(user){
//     console.log(user.username);
//     console.log(user.email);
    

// })

// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//             let error = true;
//             if(!error){
//                 resolve({username: "Ravi", password : "ravi0906"})
//             }
//             else{
//                 reject('ERROR: Something went wrong');
//             }
//     },1000)
// })

// promisefour
// .then( (user)=>{
//     console.log(user);
//     return user.password
// })
// .then( (myuser)=>{
//     console.log(myuser);
    
// })
// .catch( (error)=>{
//     console.log(error);
    
// }).finally( ()=>{
//     console.log("The promise is either resolved or rejected");
    
// })

// const promisefive = new Promise(function(resolve, reject){
//     const myfun = function myfunction(){
//         const error = false;
//                     if(!error){
//                         resolve({username: "Ravi", password : "ravi0906"})
//                     }
//                     else{
//                         reject('ERROR: Something went wrong');
//                     }
//     }
//     setTimeout(myfun , 1000)
// })
// promisefive.then( (user)=>{
//     console.log(user);
    
// }).catch( (usermy)=>{
//     console.log(usermy);
    
// }).finally( ()=> console.log("All Run"))

//this method promise are done by using async
// const promisefive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//                     let error = false;
//                     if(!error){
//                         resolve({username: "JavaScript", password : "ravi0906"})
//                     }
//                     else{
//                         reject('ERROR: Js went wrong');
//                     }
//             },1000)
// });

// async function consumepromisefive(){
//     try {
//        const response =  await promisefive
//        console.log(response.username);
//        console.log(response);
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumepromisefive()


// async function getAllusers() {
// try {
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// } catch (error) {
//     log("E:", error);
    
// }
    
// }

// getAllusers()

//async with then catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
})
.then( (data)=>{
    console.log(data);
    
})
.catch( (error)=>{
    console.log(error);
    
})
