const inputEmail = document.getElementById('email').value;
const inputBtn = document.querySelector('.btn');

inputBtn.addEventListener('click', function emailFilter(){
    switch (inputEmail) {
        case "circlepan@gmail.com":    
            alert('correct!');
            break;

        case "www.cirela@SpeechGrammarList.com" :
        case "curela@gmail.com" :  
        case "a@gmail.com" :   
            alert(' Email is wrong!');
            break;
        
        default: "I don't recognize this email"
           break; 
    }
})

//password validation
const passWord = document.getElementById('password');
password.onkeyup = function passwordCheck(){  
    let text = "";
//Lowercase letter
let lowerCase = /[a-z]/g;
if(passWord.value.match(lowerCase)){
    text = "Valid!";
} else{
    text = "password must contain lowercase";
}
//Uppercase validation
let upperCase = /[A-Z]/g;
if(passWord.value.match(upperCase)){
    text = "Valid!";
} else{
    text = "password must contain uppercase";
}

let numbers = /[0-9]/g;
if(passWord.value.match(numbers)){
    text = "Valid!";
} else{
    text = "password must contain a number";
}
}