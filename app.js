// let a = {
//     culture:"the way of life, especially the general customs and beliefs, of a particular group of people at a particular time",
//     yakka: "work",
//     vow:"to make a determined decision or promise to do something",
//     beggar:"a person, especially when you are expressing an opinion about something that they have done, or that has happened to them",
//     rubbish:"waste material or things that are no longer wanted or needed"
// }

// console.log(a["culture"]);
// console.log(a["yakka"]);
// console.log(a["vow"]);
// console.log(a["beggar"]);
// console.log(a["rubbish"]);


// let a = prompt("Enter your age for driving");
// let age = parseInt(a);
// if(age > 50){
//     console.log("You can't drive");
// }
// else if(age < 18){
//     console.log("You can't drive");
// }
// else if (age <= 18 && age <= 50){
//     console.log("You can drive");
// }else{
//     console.log("nikal")
// }

// console.log("You could", a<18? "not drive":"drive") //Ternory operator .

// const cups = 45;
// switch (cups){
//     case 45:
//         console.log("The value is cup of 4")
//         break;
//     default:
//         console.log("nikal nikal nikal")

// }

/*
let age = prompt("Enter your age");
switch (age) {
    case "10":
        console.log("Your age is special 10")
        break;
    case "11":
        console.log("Your age is special 11")
        break;
    case "12":
        console.log("Your age is special 12")
        break;
    case "13":
        console.log("Your age is special 13")
        break;
    case "14":
        console.log("Your age is special 14")
        break;
    case "15":
        console.log("Your age is special 15")
        break;
    case "16":
        console.log("Your age is special 16")
        break;
    default:
        console.log("Your age is not special "+ age);
}
*/

/*
let age = 19;
console.log("you can", age<18? "not drive":"drive");//This is called ternory operator..
*/


// let person = "Moazzam khan";
// switch (person) {
//     case "ali":
//         console.log("Hello Ali");
//     case "Ahmed":
//         console.log("Hello Ahmed");
//     case "Moazzam khan":
//         console.log("Hello Moazzam khan");
//         break;
//     default:
//         alert("hello, handsome");
// }


//    For In Loop   //


// const obj = {
//     ali : 78,
//     ahmed : 60,
//     muneeb : 50,
//     raza : 76,
//     sara : 83,
// }

// for(let a in obj){
//     console.log(obj[a]);
// }

//    For of Loop   //

/*
let arr = ["Muhamad", "Moazzam", "Khan"]
for (let b of arr) {
    console.log(b)
}
*/


//    while Loop   //

// let num = prompt("Eter the any value");
// num = Number.parseFloat(num);

// let i = 0;
// while(i < num){
//     i++;
//     console.log(i+1);
// }


//    do while Loop   //

/*
let n = prompt("Enter the any value");
n = Number.parseFloat(n);

let j = 0;
do{
    console.log(j)
 j++
}while(j < n)

*/
/* 
let reportCard = {
    ali : 89,
    ghous : 56,
    sara : 65,
}

for(let j in reportCard){
    console.log(reportCard[j]);
}
 let arr = Object.keys(reportCard);
 arr.forEach((argument)=>{
     console.log(argument);
 })

 */

/* 
for(let i = 0; i < Object.keys(reportCard).length;i++ ){
   console.log("Ther marks of "+ Object.keys(reportCard)[i] + " are " + reportCard[Object.keys(reportCard)[i]]);
}

 for(let i in reportCard){
    console.log("The marks of "+ i + " are " + reportCard[i]);
 } */


/*

let num = 3;
let i;
while(i != num){
   console.log("try again")
   i = prompt("Enter the correct number");
}
console.log("you have entered the correct number")
*/


/*
const mean = (a,b,c,d,e)=>{
    return  (a+b+c+d+e)/2;
}
console.log(mean(2,3,4,5,6));
*/

// let friut = 'bana\ra';
// console.log(friut.length)
/* 
let compare =(a,b) =>{
    return b -a ;
}

let arr = [34,34,2,43,23,342,234,4,234,23423,423,4];
console.log(arr.sort()) */
// arr.sort(compare);

/* let arr = [3,2,3,5,6];

arr.forEach((papakepari)=>{
    console.log(papakepari*papakepari)
})
 */
//  let name = 'Muhammad Moazzam Khan';
// let a = Array.from(name);

// /* let b = a.forEach((hello)=>{
//     console.log(hello)
// });
// */

// for(let i of a){
//     console.log(i);
// }


//   Higer Arrry Method   //
//       MAP    //
/* 
let arr = [2,3,7,3,5];
let newarr = arr.map((value,index,arry)=>{
    console.log(value +index,arry)
    return arry
})
console.log(arr);
console.log(newarr);


 */

//     Filter    // 
/* let arr1 = [2, 3, 70, 3, 50];
let newarr1 = arr1.filter((a)=>{
    return a<10
})
console.log(newarr1)
 */
/* 
let arr1 = [2, 3, 70, 3, 50];
let newarr1 = (a)=>{
    return a<10
}
console.log(arr1.filter(newarr1));
 */


//    Reduce    //

/*
let arr2 = [2, 3, 7, 3, 5];
 let newarr2 = (a, b) => {
    return a + b
}
console.log(arr2.reduce(newarr2));

let newarr2 = arr2.reduce((a, b) => {
    return a + b
})
console.log(newarr2);

*/