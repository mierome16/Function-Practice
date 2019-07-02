// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------
var largeNumber = Math.max(...numbers);

console.log(largeNumber)

// ---------------------------
// 2. Find longest string
// ---------------------------
var longest = strings.reduce(function (a, b) { return a.length > b.length ? a : b; });

console.log(longest)

// ---------------------------
// 3. Find even numbers
// ---------------------------
let filtered=numbers.filter((a,i)=>i%2===1);
console.log(filtered);



// ---------------------------
// 4. Find odd numbers
// ---------------------------
let oddnumbers = numbers.filter((a,i)=>i%2===0);
console.log(oddnumbers);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containsIs(a) {
    let NewR = '';
    for (let i = 0; i < a.length; i++) {
        if(a[i].includes("is")){
            NewR += a[i] + " "
        } else {
            //
        }
    }return NewR;
}
console.log(containsIs(strings));

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var join = numbers + strings;
console.log(join);



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
function teachers(x) {
    let y = '';
    for (let i=0; i < x.length; i++) {
        if (x[i].teaches.includes("JavaScript")){
            y += x[i].firstname + " "
        }else {
            //
        }
    } return y
}
console.log(teachers(instructors));