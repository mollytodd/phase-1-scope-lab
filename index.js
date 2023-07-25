// Global variables

var customerName = 'bob';
const leastFavoriteCustomer = 'bob';

//functions

function upperCaseCustomerName() {
customerName = customerName.toUpperCase()
return customerName
}
// the above part confused me. I would have just tried to return the global variable rather than creating a new uppcase variable in scope
console.log(upperCaseCustomerName(bob));

function setBestCustomer() {
bestCustomer = 'not bob'; 
return bestCustomer
}
console.log(setBestCustomer());

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob' ;
    return bestCustomer
}
console.log(overwriteBestCustomer());

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'molly';
}