let x1 = Math.round(4.8);       // kachakachi purno songkha banay (Output: 5)
console.log(x1);

let x2 = Math.ceil(4.2);        // uporer purno songkha banay (Output: 5)
console.log(x2);

let x3 = Math.floor(4.6);       // nicher purno songkha banay (Output: 4)
console.log(x3);

let x4 = Math.trunc(4.82345);   // doshomik bad diye dei (Output: 4)
console.log(x4);

let x5 = Math.random();         // 0 theke 1 er moddhe random doshomik songkha dei
console.log(x5);

let x6 = Math.random() * 10;    // 0 theke 10 er moddhe random doshomik songkha dei
console.log(x6);

let x7 = Math.floor(Math.random() * 10); // 0 theke 9 er moddhe random purno songkha dei
console.log(x7);


const result = document.querySelector(".result");
const numberBtn = document.querySelector(".btn");
numberBtn.addEventListener("click",()=>{
    let x = Math.ceil(Math.random()*50)                // 1 theke 50 er moddhe random purno songkha generate korbe
    result.innerHTML = x;
})