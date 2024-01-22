const accountId = 786786
let accountEmail = "trickyrushan@gmail.com"
var accountPassword = "54321"
accountCity = "Lucknow"
let accountState = "Uttar Pradesh"

// accountId = 2 // not allowed


accountEmail = "meet2rushan@gmail.com"
accountPassword = "00000000"
accountCity = "Kanpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])