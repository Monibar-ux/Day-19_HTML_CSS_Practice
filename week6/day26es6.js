/*
// 1. Arrow Functions

// Traditional function
function traditionalLogin(username, password) {
    return 'Logging in ${username} with password ${password}';
}

const arrowLogin = (username, password) => {
    return `Logging in ${username} with password ${password}`;
};

const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;


//2. Template Literals
const testUser = 'John_Doe';
const testEnv = 'staging';
const testCount = 5;

// Old way
const oldMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnv;

// ES6 way (template literal)
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

console.log(oldMessage)
console.log(newMessage)

//3. Destructuring

const testConfig = {
    baseUrl: 'http://testapp.com',
    timeout: 30000,
    retries: 3,
    browser: 'chromium'
};

const baseUrl = testConfig.baseUrl;
const timeout = testConfig.timeout;
//console.log(baseUrl, timeout);

//const { baseUrl, timeout } = testConfig;
//console.log(baseUrl, timeout);


//4. Spread Operator (...)

const basicTests = ['login', 'logout'];
const advancedTests = ['api_test', 'performance_test'];

const allTests = [...basicTests, ...advancedTests, 'security_test'];
 //console.log(allTests);  
 
 
 const defaultConfig = {timeout:3000, retries: 3 };
 const customConfig = {...defaultConfig, browser: 'firefox' };
 //console.log(customConfig);

 //5. Default Parameters

 const runTest = (testName, browser = 'chromium', timeout = 30000) => {
    return `Running ${testName} on ${browser} with ${timeout}ms timeout`;
 };
 
 //console.log(runTest('login_test'));
 //console.log(runTest('login_test', 'firefox'));
 //console.log(runTest('login_test', 'firefox', 6000));
 
 //6. Enhanced Object Literals
 const username = "test_user";
 const password = "test_pass";

 // Old Way
 const user1 = {
    username: username,
    password: password
 };

 // New way (shorthand)
 const user2 = {
    username,
    password  
 };

 //console.log(user1);
 // { username: "test_user", password: "test_pass"}

const user = {
    username: "admin",

    // Old way
    login: function() {
        return `${this.username} logged in`;
    },    

// New way
logout() {
    return  `${this.username} logged out`;
   }
};

console.log(user.login()); // admin logged in
console.log(user.logout()); //admin logged out
*/

// 1. Arrow functions
//function greet(username) {
//  return 'Hello, ' + username;
//}

//const greetArrow = (username) => {
//  return `Hello, ${username}`;
//};
//const greetShort = username => `Hello, ${username}`;

//console.log(greet('Alex'));
//console.log(greetArrow('Alex'));
//console.log(greetShort('Alex'));

// 2. Template literals
//const testUser = 'John Doe';
//const testEnvironment = 'staging';
//const testCount = 5;

//const oldMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnvironment;
//const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnvironment}`;

//console.log(oldMessage);
//console.log(newMessage);

// 3. Destructuring
//const testConfig = {
//  baseUrl: 'https://insurance.roadtoqa.com',
//  timeout: 30000,
//  retries: 2,
//};

//const baseUrl = testConfig.baseUrl;
//const timeout = testConfig.timeout;
//const retries = testConfig.retries;
//console.log(baseUrl, timeout, retries);

//const { baseUrl, timeout, retries } = testConfig;
//console.log(baseUrl, timeout, retries);

//// 4. Spread operator
//const basicTests = ['login', 'logout'];
//const advancedTests = ['api test', 'performance test'];
//const allTests = [...basicTests, ...advancedTests, 'security test'];
//console.log(allTests);

//const defaultConfig = { timeout: 3000, retries: 3 };
//const customConfig = { ...defaultConfig, browser: 'firefox' };
//console.log(customConfig);

// 5. Default parameters
//const runTest = (testName, browser = 'chromium', timeout = 3000) =>
// `${testName} on ${browser} with ${timeout}ms timeout`;

//console.log(runTest('Login test'));
//console.log(runTest('Login test', 'firefox'));
//console.log(runTest('Login test', 'firefox', 6000));


// 6. Enhanced object literals
//const username = 'testuser';
//const password = 'testpass';
//const user1 = { username: username, password: password };
//const user2 = { username, password };
//console.log(user1);
//console.log(user2);

//const admin1 = {
  //name: 'admin',
  //login: function () { return 'Logged in'; },
//};
//const admin2 = {
  //name: 'admin',
  //login() { return 'Logged in'; },
//};
//console.log(admin1.login());
//console.log(admin2.login());

//function add (a, b = 0) {
     //return a + b;
 //}
 //let sum = add(20, 4);
// console.log(sum);

//function testLogin(username, password) {
 // return `Logging in ${username} with password ${password}`;
//}

//const arrowLogin = (username, password) => {
  //return `Logging in ${username} with password ${password}`;
//};

//const shortLogin = (username, password) =>
//  `Logging in ${username} with password ${password}`;

//console.log(arrowLogin('monibar', 'snickersbar'));
//console.log(shortLogin('monibar', 'snickersbar'));

//const add = (a, b = 0) => a + b;
//const sum = add(20, 4);
//console.log(sum);

// 2. Template literals
//const testUser = 'Moni_Bar';
//const testEnvironment = 'Development';
//const testCount = 3;

// Old way
//const oldMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnvironment;

// ES6 way (template literal)
//const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnvironment}`;

//console.log(oldMessage);
//console.log(newMessage);

// Default Parameters

//const runTest = (browser) => `Browser: ${browser}`;

//['Chrome', 'Edge', 'Safari'].forEach((browser) => {
    //console.log(runTest(browser));
////});

const runTest = (browser) => `Browser: ${browser}`;
['no browser', 'firefox', 'webkit'].forEach((browser) => {
    console.log(runTest(browser));
});