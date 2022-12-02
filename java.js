function one(){
    let out = document.getElementById('here').value += "1"
}

function two(){
    let output = document.getElementById('here').value += "2"
   
}

function three(){
    let output = document.getElementById('here').value += "3"
    
}

function four(){
    let output = document.getElementById('here').value += "4"
    // console.log(output)
}

function five(){
    let output = document.getElementById('here').value += "5"
  
}

function six(){
    let output = document.getElementById('here').value += "6"
   
}

function seven(){
    let output = document.getElementById('here').value += "7"
 
}

function eight(){
    let output = document.getElementById('here').value += "8"
   
}

function nine(){
    let output = document.getElementById('here').value += "9"
    
}


function ac(){
    let output = document.getElementById('here').value = ""
 let faith = ""

   
}

function input(){
    let comRand = Math.floor(Math.random() * 10 );
    let usernum = document.getElementById('here').value;

    let mm = usernum.toString()
    let mn = mm.length

    if (mn > 1){
        faith = "Input a number between 1 and 9"
        console.log("Input a number between 1 and 9")
    }

    if(mm = ""){
        console.log('empty')
    }

    if(comRand == usernum && mn == 1){
     faith = ` You Win your predicted number is ${usernum} and random number is ${comRand}`;
     }

    if(comRand != usernum && mn == 1){
        faith = `You Lose your predicted number is ${usernum} and random number is ${comRand}`
    }

    else{
        faith = `Input a number between 1 and 9`
    }
    document.getElementById('put').innerHTML=faith;
}



let number = 3
console.log(number)
let num = number.toString()
console.log(num.length)


