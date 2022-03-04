const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question(`Welcome to the Password Validator tool! Please enter password to validate.`, function(input){
	tokens = input.split('');

	userPassword = tokens[0];
    character1 = tokens[1];
    character2 = tokens[2];
    character3 = tokens[3];
    character4 = tokens[4];
    character5 = tokens[5];
    character6 = tokens[6];
    character7 = tokens[7];
    character8 = tokens[8];
    character9 = tokens[9];
    character10 = tokens[10];

	password = '1234567890' ;{
    (`${password.length}`)
    }
    if (userPassword < password.length) {
        console.log(`WEAAAK BRO`)
        
    } else (userPassword >= password.length)
        console.log(`NICE BRO!`)


	reader.close()

});




