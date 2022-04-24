var customerName = 'bob';

var bestCustomer;

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase(); 
   return customerName;
}
function setBestCustomer() {
    return bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
   return bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer() {
   const leastFavoriteCustomer ='bobb';
   return leastFavoriteCustomer ='who!!'
}