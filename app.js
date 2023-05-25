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
/* let name = 'Muhammad Moazzam Khan';
let a = Array.from(name);

let b = a.forEach((hello)=>{
   console.log(hello)
});
*/
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

//    Reduce     //
/*
let arr1 = [2, 3, 70, 3, 50];
let newarr2 = arr1.reduce((a,b)=>{
    return a + b;
})
console.log(newarr2);
 */


//     END      //

/* 
let a = document.body.lastElementChild;
let b = document.body.firstChild;
let c = document.body.firstElementChild;
console.log(a)
console.log(b)
console.log(c)
console.log(a.nextElementSibling)
console.log(a.lastElementChild)
console.log(document.body.lastChild)
 */

/* 
let a = document.documentElement.parentNode;
let b = document.body.firstElementChild;
console.log(a)
console.log(b.nextElementSibling.firstChild.nextSibling)
 */
//    table     //
/* 
let t = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[0].rowIndex)
console.log(t.rows[2].cells)
console.log(t.rows.cellsIndex)
 */

/* 
let id1 = document.querySelector("#id1");
let id2 = document.querySelector("#id2");
let sp1 = document.querySelector("#sp1") 


//  matches    closest    contains   //

console.log(id2.matches('.c2'));
console.log(id2.closest("#mainId"));
console.log(id2.contains(sp1));
console.log(sp1.contains(sp1));
*/

/* 
let x = document.getElementsByTagName("span")[0];
console.log(x);

let y = document.getElementsByTagName("span")[0];
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
 */

/* 
console.log(jani.innerHTML)
console.log(jani.innerHTML = "PAPAKEPARI")
console.log(jani.outerHTML )
console.log(jani.outerHTML = "<h1>PAPAKEPARI</h2>")
 */
/* 
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue) 
console.log(document.body.textContent);
hidden.hidden = false;
 */


//         attribue methods         //
/* 
let hello  = document.getElementById("hello");
console.log(hello.getAttribute("class"));
console.log(hello.hasAttribute("class"));
console.log(hello.hasAttribute("style"));
console.log(hello.setAttribute("hidden" , "true"));
console.log(hello.setAttribute("class" , "class kalo"));
console.log(hello.removeAttribute("class"));
console.log(hello.removeAttribute("hidden"));
console.log(hello.attributes);
console.log(hello.dataset);
console.log(hello.dataset.game);
console.log(hello.dataset.player);
 */


//     HTML Insertion Methods    //
/* 
let b = document.getElementsByTagName("div")[0].setAttribute("id","div");
let a = document.getElementById("div");
div.innerHTML = "<h1 class='hey'>Hello world</h1>";
let div = document.createElement("div")
div.innerHTML = "<h1 class='hey'>Hello world</h1>";
a.append(div);
a.prepend(div);
a.after(div);
a.before(div);
a.replaceWith(div);
 */


//    Insert Adjacent   //

// first.insertAdjacentHTML("beforebegin","<div class='first'>hey i'm one</div>")
// first.insertAdjacentHTML("beforeend","<div class='first'>hey i'm one</div>")
// first.insertAdjacentHTML("afterbegin","<div class='first'>hey i'm one</div>")
// first.insertAdjacentHTML("afterend","<div class='first'>hey i'm one</div>")
// first.remove()


//    CLasses method   //
/* 
first.className = "yellow text-dark blue";
first.classList.add("blue");
first.classList.remove("blue");
first.classList.remove("yellow");
first.classList.add("red");
first.classList.toggle("red");
console.log(first.classList.contains("red"))
 */

//    addEventlistener   //
/* 
let x =    (e) => {
    // alert("hello")
    console.log(e)
    console.log(e.type ,e.clientX , e.clientY)
}
let y = (e)=>{
    alert("hello")
}
 
btn.addEventListener("click", x)
btn.addEventListener("click", y)
btn.removeEventListener("click", x)
 */

//   call back  //
/* 
function loadScript(src ,callback){
    let script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC : "+ src)
        callback(null , src);
    }
    script.onerror = function(){
        console.log("error loading script with src: " + src)
        callback(new Error("src got some error"),src)
    }
    document.body.append(script);
}
function hello(error ,src){
    if(error){
        console.log(error)
    }
    alert("hello \n" + src)
}
function goodNight(error , src){
    if(error){
        console.log(error)
    }
    alert("goodNight <br>" + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)
 */

//   callback hell/pyramit of dooms   //

//sendEmergencyMessageToCeo()    // this method uses when some error while working callback and got some error ,so it send message to Ceo of office..


//      Promises   //

// let promise1 = new Promise((resolve, reject) => {
//     console.log("Promis is pending")
//     setTimeout(() => {
//         console.log("resolved atfer 2 second resolved") 
//         resolve(true)
//     }, 2000);
// })

/* 
let promise2 = new Promise((resolve,reject)=>{
    console.log("Promis is pending")
        setTimeout(() => {
        console.log("resolved atfer 2 second resolved") 
        resolve(true)
    }, 2000);
    setTimeout(() => {
        console.log("resolved atfer 2 second rejected")
        reject(new Error("I'm an error"))
    }, 2000);
})

promise2.then((value)=>  {
    setTimeout(() => {
        console.log(value)
    }, 5000)},(error)=>{
        console.log(error)
    })
 */

// },(error)=>{
//     console.log(error)
// })

// promise2.catch((error)=>{
//     console.log("Some error occured in p2 ")
// })



/* 
let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("done")
    },1000)
})

p.then(alert);
 */
/* 
const loadScript = (src)=>{
    return new Promise ((resolve,reject)=>{
    let srcipt = document.createElement("script");
    srcipt.type = "text/javascript";
    srcipt.src = src;
    document.body.appendChild(srcipt)
    srcipt.onload = ()=>{
        resolve("script has been loaded")
    }
    srcipt.onerror = ()=>{
        reject("Script has not been loaded")
    }
})
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
}).then((value)=>{
    console.log("Second script is ready")
}).catch((error)=>{
    console.log(error)
})
 */

/* 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resoled after 2 second")
        resolve(56);
    }, 2000);
})
promise.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) =>{
        resolve("promise 2")
    })
}).then((value)=>{
    console.log("we are done");
})
 */

//    Promise API (Application Programming Interface)   //
/* 
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 1")
        reject(new Error("I'm an Error"))
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error("I'm an Error"))
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 3")
        reject(new Error("I'm an Error"))

    }, 3000);
})
 */
/* 
let promise_all = Promise.all([p1, p2, p3])
promise_all.then((value)=>{
    console.log(value)
})
 */

/* 
let promise_allSettled = Promise.allSettled([p1, p2, p3])
promise_allSettled.then((value)=>{
    console.log(value)
})
 */

/* 
let promis_race = Promise.race([p1, p2, p3]);  // race method find fisrt resolve or reject value
promis_race.then((value)=>{
    console.log(value)
})

 */

/* 
let promise_any = Promise.any([p1, p2, p3]);    //any method find first resolve value . it didn't find error.If all promis are rejected , it'll throw Aggregate error like this (All promises were rejected)..
promise_any.then((value) => {
    console.log(value)
})
 */
// Promise.resolve()
// Promise.re)ject(


//   async  and await   //

/* 
async function khan() {

    let karachiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("karachi 25 deg")
        }, 2000);
    })

    let lahoreWaather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("lahore 32 deg")
        }, 5000);
    })
    console.log("fetching karachi weathe please wait..")
    let karachiW = await karachiWeather;
    console.log("karachi weather has fetched "+ karachiW)
    console.log("fetching lahore weathe please wait..")
    let lahoreW = await lahoreWaather;
    console.log("lahore weather has fetched "+ lahoreW)

    return [karachiW, lahoreW]
} 
const pathan = async()=>{
    let cherry = async ()=>{
        console.log("I'm cherry")
    } 
    let p1 =  khan()
    let p2 = cherry()
}
pathan()
 */