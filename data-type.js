// let  a = 25;
// let b = "kamal pasa khala sudud tasa";



//primitiver data
//number
//string
//boolem
//undefiend
//mull

//symbol

// let a = 'Hello'
// let b = a;
// a = "gello"
// console.log(a, b);

//non-primirtive
//object

// const x = { job: 'web designer' }
// const y = x;
// y.job = 'web devoloprer'
// console.log(x, y);


// 0 এর মানকে সব সময় Falsy ধরে "" Falsy ধরে " " Truthy ধরে null Falsy ধরে NaN Falsy ধরে [] Truthy ধরে {}Truthy ধরে
// let x = 1;
// // console.log(x);
// if (x) {
//     console.log("This Variable Truthy");
// } else {
//     console.log("This Variable Falsy");
// }

// যদি কোন value মধ্যে না পাওয়া যায় তখন undefined দেখায়।
// let one;
// console.log(one);

// এই ফাংশানের মধ্যে return করি নাই বিধায় আমাদের undefined দেখাবে।
// function secound(x, y) {
//     const sun = x + y;

// }
// const result = secound(3, 90);
// console.log(result);



// function secound(x) {
//     console.log(x);
//     const sun = x + y;
//     return sun

// }
// const result = secound(10, 90);
// console.log(result);



// var wish = undefined;
// const ourClass = { name: "Ali Sir", profession: null }
// console.log(ourClass.profession);


// কমপেয়ার করা == ও দেখে শুধু ভিতরের ভেলু টা সেম কিনা । আর === ও দেখে কে কোন টাইপের ভেলুর
// my-love == herlove
// const first = "3";
// const second = 3;
// if (first === second) {                 //first == second
//     console.log('condition is ture');
// }
// else {
//     console.log('condition is False');
// }

// primitive হওয়ার কারণে আমাদের ভিতরের ভেলু এক থাকার পরও ভুল দেখাবে।
// const a = { name: 'rifat' };
// const b = { name: 'rifat' };

// if (a === b) {
//     console.log('botrh are same');
// } else {
//     console.log('borth are not same');
// }



//কোডের যে কোন জায়গায় নেওয়া যায় এইটাকে গ্লোবাল ইসকোপ বলা হয় Global Scope  const number = 100;
// let and var একটা জিনিস আছে সেটা হলো var হলো যে জায়গায় কল করা হবে তবে function এর মধ্যে থাকতে হবে ও সেই জায়গায় পাবে কিন্তু let পাবে না।

// const number = 100;

// function add(first, second) {
//     const add = first + second;
//     console.log(first);
//     if (add > 10) {
//         // var moode = 'happy';
//         let mood = 'happy';
//         console.log(mood);
//     }
//     // console.log(moode);
//     return add;
// }
// const sum = add(35, 15);
// console.log(sum);
// console.log(number);


// javascrirpt Hoisting



// what is Closer and InCapsulation
// একটা function এর মধ্যে আরেকটা function কে return করতে গেলে তারা নিজস্ব একটা জায়গা দখল করে বা InCapsulation তৈরি করে আর সেটাকে বলে Closer

// function stopWatch() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     }
// }
// let clock1 = stopWatch();       //এইটা একটা function হিসেবে আছে যেহুত আমরা একটা variable এর মধ্যে function কে কল করেছি।
// let clock2 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// console.log(clock2());
// console.log(clock2());


//Call back function 
