const accountId = 1234
let accountEmail  = "manish@gmail.com"
var accountPassword = "1234"
accountCity = "hyderabad"

// accountId = 2; not allowed
/*
Prefer not to use VAR
because in issue in block scope and functional scope 1
*/
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity])