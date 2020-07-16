class Validation {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	ismail() {
		let mail = this.email;
		if (mail.split("@").length != 2) {
			console.log('wrong');
		} else if (mail !== "") {
			console.log('correct');
		}
	}

	ispassword() {
		let passcode = this.password;
		if (passcode.match(/[a-z]/g) && passcode.match(/[A-Z]/g) && passcode.match(/[0-9]/g) && passcode.match(/[^a-zA-Z\d]/g) && passcode.length >= 8)  {
			console.log('correct');
		} else {
			console.log('wrong');
		}
	}
}

validate = new Validation('tomprezine@gmail.com', '12345@Abc');
validate.ismail();
validate.ispassword();