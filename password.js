const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question(`Welcome to the Password Validator tool! Please enter password to validate: `, function(password){


    if (password.length >= 10 && !password.includes(` `)){
        console.log(`Password meets the length requirement.`)
    } else {
        console.log(`Password is too short.`)
    }

        
   

	reader.close()

});




