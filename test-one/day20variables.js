let username = 'testuser123';
let password = 'test123';
let email = 'testuser@test.com';
let loginAttempts = 0;
let testsPassed = 5;
let isLoggedIn = false;
let testComplete = true;

console.log('Test Automation Data:');
console.log('Username:', username);
console.log('Email:', email);
console.log('Login attempts:', loginAttempts);
console.log('Tests passed:', testsPassed);
console.log('User logged in:', isLoggedIn);
console.log('Test complete:', testComplete)

let x;
let y = null;
let notANumber = 0 / 0;
let person = { name: 'Tony', age: 30 };
let numbers = [1, 2, 3];
let id = Symbol('id');
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(x);
console.log(y);
console.log(notANumber);
console.log(person.name); 
console.log(person.age);
console.log(numbers[0]);
console.log(id.toString());
console.log(bigNumber);

// const websiteURL = 'testamplify.com';
// const maxRetries = 3;
// const timeout = 30000;

// let currentPage = 'dashboard'
// let testResult = 0;
// let errorCount = 0;

// // websiteURL = 'testamplify.com';
// currentPage = 'dashboard';
// errorCount = errorCount + 1;

// const('WebsiteUrl:', websiteURL);
//const('Max retries:', 3);
// const('Timeout:', 30000);
// let('Current page:', currentPage);
//let('Test result:', testResult);
// let('Error count:', errorCount);

const websiteURL = 'https://testamplify.com';
websiteURL = 'https://different.com';
const maxRetries = 3;
const timeout = 30000;
let currentPage = 'login';
let testResult = 0;
let errorCount = 0;

console.log('Website URL:', websiteURL);
console.log('Max retries:', maxRetries);
console.log('Timeout:', timeout);
console.log('Current page:', currentPage);
console.log('Test result:', testResult);
console.log('Error count:', errorCount);
