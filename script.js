function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function mul(x,y){
    return x * y;
}

function div(x,y){
    return x/y;
}

let fnum = 0;
let opr = "";
let snum = 0;

let opr_dic = {
    "+":add,
    "-":sub,
    "*":mul,
    "/":div
};

function operate(fnum,opr,snum){
    return opr_dic[opr](fnum,snum);
}
let display_eqn = document.querySelector(".eqn");
let display_val = "";
let numbers = document.querySelectorAll(".num");
numbers.forEach((num) =>{
    num.addEventListener("click",() =>{
        display_val+= num.textContent;
        display_eqn.textContent = display_val;
    });
});

