
let username = 'testuser';
let password = 'correctpass';
let loginAttempts = 0;
const maxAttempts = 3;

// ARITHMETIC OPERATORS
loginAttempts = loginAttempts + 1;

let remainingAttempts = maxAttempts - loginAttempts;
let totalTests = 5 * 3;
let averageTime = 150 / 5;

// PRINT RESULTS
console.log('Login attempts:', loginAttempts);
console.log('Remaining attempts:', remainingAttempts);
console.log('Total tests:', totalTests);
console.log('Average time:', averageTime)

//code
let expectedTitle = 'Dashboard';
let actualTitle = 'Dashboard';
let expectedCount = 5;
let actualCount = 5;
console.log('Titles match:', actualTitle === expectedTitle);
console.log('Counts match:', actualCount === expectedCount);
console.log('Attempts less than max:', loginAttempts < maxAttempts);
console.log('Attempts greater than 0:', loginAttempts > 0);
console.log('Password not empty:', password !== '');
console.log('5 == "5":', 5 == '5');
console.log('5 === "5":', 5 === '5');

// CODE · IF / ELSE IF / ELSE
if (username === 'testuser' && password === 'correctpass') {
console.log('Login successful');
let isLoggedIn = true;
} 
else if (loginAttempts >= maxAttempts) {
console.log('Too many failed attempts. Account is locked.');
else {
console.log('Invalid credentials. Try again.');

let pageLoaded = true;
let elementVisible = true;
let dataReady = false;

// AND: all conditions must be true
if (pageLoaded && elementVisible && dataReady) {
console.log('Ready to test');
} else {
   console.log('Waiting for conditions');
}

// or: at least one must be true
if (userRole === 'admin' || username === 'admin') {
   console.log('Authorized user');
}

// NOT: flips true and false
if (!dataReady) {
    console.log('Still loading data');
}
// not: flips true and false
if (!dataReady) {
    console.log('Still loading data');
}
