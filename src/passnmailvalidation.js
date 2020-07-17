//const inputEmail = document.getElementById('email').value;
/*
const inputBtn = document.querySelector('.btn');

inputBtn.addEventListener('click', ismail);
inputBtn.addEventListener('click', ispassword);

class Validation {
	constructor(email, password) {
		this.email = email.value;
		this.password = password.value;
	}
	
	ismail() {
		let mail = this.email;
		if (mail.split("@").length != 2) {
			document.write('wrong');
		} else if (mail !== "") {
			document.write('correct');
		}
	};

	

	ispassword() {
		let passcode = this.password;
		if (passcode.match(/[a-z]/g) && passcode.match(/[A-Z]/g) && passcode.match(/[0-9]/g) && passcode.match(/[^a-zA-Z\d]/g) && passcode.length >= 8)  {
			document.write('correct');
		} else {
			document.write('wrong');
		}
	}
}

validate = new Validation('tomprezine@gmail.com', '12345@Abc');
validate.ismail();
validate.ispassword();
*/

/*const arrays = [];

const newArrays = arrays.map(function(array){
	return newArrays.reverse();
})
console.log(newArrays);*/ 

function factorial(n){ 
	let result = 1;
	for( let i = 1; i <= n; i++){
		if(n <= 0){
			return result;
		}
		result *= 1;
	}
	console.log(result)
}


