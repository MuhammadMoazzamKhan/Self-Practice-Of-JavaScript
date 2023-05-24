//     PRACTICE # 1  //


// Q1

// let arr = [1,2,4,7,8];
// let get = prompt("Enter the single number");
// arr.push(get);
// console.log(arr);

// Q2
/* let arr = [1, 2, 4, 7, 8];
let a;

do {
    a = prompt("Enter the single number");
    arr.push(a);
} while (a != 0);
console.log(arr)

 */

// Q3
/* 
let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let n = (m) => {
    return m % 10 == 0
}
console.log(arr.filter(n));
 */

// Q4
/* 
let arr = [1, 2, 4, 7, 8];
console.log(arr);

let m = arr.map((s) => {
    return s*s
})
console.log(m);
 */

// Q5
/* 
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr)
let factorial = arr.reduce((a, b) => {
    return a * b
})
console.log(factorial);
 */

//     PRACTICE # 2  //

// Q1
// console.log(document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red")

// Q2
//Answer = Yes

// Q3
// document.getElementsByTagName('nav')[0].firstElementChild.style.color = "green";
// document.getElementsByTagName('nav')[0].lastElementChild.style.color = "green";

// Q4

// Array.from(document.getElementsByTagName("li")).forEach((elements)=>{
//     elements.style.background = "cyan";

// })

// Q5
// farthest element which method;
//(a) matches (b)closest (c) contains (d) none of these;
// answer is none of these;

//     PRACTICE # 3  //
/* 
document.getElementById("google").addEventListener("click", ()=>{
   location = "https://www.google.com/"
   win.focus()
})
document.getElementById("facebook").addEventListener("click", ()=>{
   location = "https://www.facebook.com/"
   win.focus()
})
document.getElementById("youtube").addEventListener("click", ()=>{
   location = "https://www.youtube.com/"
   win.focus()
})
 */
/* 
function bulb(){
    let bulb = document.getElementsByTagName("div")[0];
    bulb.className = "bulb-off bulb-on "
    if(bulb.innerHTML == 'on'){
        bulb.innerHTML = 'off'
    }else{
        bulb.innerHTML = 'on'
        bulb.classList.toggle("bulb-off")
   
    }
    console.log(bulb)
}
 */