const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

let a = 35;

plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click", () => {
    a--;
    num.innerText = a;
    console.log(a);
});