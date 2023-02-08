//Asynchronus Example

let a = 10;
let b = 0;

setTimeout(() => {
    b = 20;
}, 2000)
console.log(a + b); //10 which is wrong becuase of data of b cannot updated this the drawback of asynnchronous

// Correction 

let q = 12;
let e = 0;
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000)
})

waitingData.then((data) => {
    e = data;
    console.log(q + e);
})