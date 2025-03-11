const accountId = 1223 // do not change : const
let accountEmail = "pranay@21"  // can be change : let  // in let there is no problem for scope (block scope) that is why we use "let" instead of var
var accountPassword = "1234" // var and let can be change and can do same work but in "var" it can create problem for scope like if someone changes password it can change all users password that is why we use "let" mostly.
accountCity = "Jaipur"
let accountState;   // if you declared variable without giving its value u will get "undefined" in output


/*
Prefer not to use Var because 
of issues in block scope and functional scope
*/


// accountId = 1224 // not allowed to change : give errors 

accountEmail = "pranayjha@21"
accountPassword = "212121"
accountcity = "katihar"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])