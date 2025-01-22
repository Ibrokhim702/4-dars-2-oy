// const a = document.querySelector(".form");
// const b = document.querySelector(".input");

// a.addEventListener("submit" , (g) => {
//     g.preventDefault();
//     const w = document.createElement("h1");
//     w.textContent = b.value;
//     document.body.append(w)
// })

// const aaa = document.querySelector(".decreaseBtn");
// const aab = document.querySelector(".increaseBtn");
// const aac = document.querySelector(".resetBtn");
// const aaa = document.querySelector(".decreaseBtn");
// const aab = document.querySelector(".card");

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function() {
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function() {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function() {
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }


// document.getElementById("submitButton").onclick = function() {
//     const inputValue = document.getElementById("inputField").value;
//     document.getElementById("outputField").innerHTML = inputValue;
//     document.getElementById("inputField").value = '';
// };


// let count = 0;

// document.getElementById("decreaseBtn").onclick = function() { 
//     let inputValue = parseInt(document.getElementById("numberInput").value) || 0;
//     count -= inputValue;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function() {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function() {h
//     let inputValue = parseInt(document.getElementById("numberInput").value) || 0;
//     count += inputValue;
//     document.getElementById("countLabel").innerHTML = count;
// }

// console.log(count--);
// console.log(count--);
// console.log(++count);
// console.log(--count);


// console.log(++count);
// console.log(++count);
// console.log(++count);
// console.log(++count);
// console.log(++count);



const form = document.querySelector(".wrapper")
const input = document.querySelector("#raqam");
const btnMinus = document.querySelector(".minus");
const btnPlyus = document.querySelector(".plyus");
const num = document.querySelector(".text");
const rang = document.querySelector("#rang")

console.log(form,input,btnMinus,btnPlyus,num);


let count = 0;



form.addEventListener("submit" , (e)=> {
    e.preventDefault();
    const inputQiymati = Number(input.value); 
    count = inputQiymati;
    num.textContent = count;
});

btnMinus.addEventListener("click", (e)=> {
    e.preventDefault();
    count--;
    num.textContent = count;
});

btnPlyus.addEventListener("click", (e1)=> {
    e1.preventDefault();
    count++;
    num.textContent = count;
});

rang.addEventListener("input",()=> {
    const newtag = rang.value;
    num.style.color = newtag
});


