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
    return "" + opr_dic[opr](fnum,snum);
}
let display_eqn = document.querySelector(".eqn");
let prev_eqn = document.querySelector(".prev-eqn");
let prev_val = "";
let display_val = "";
let numbers = document.querySelectorAll(".num");

let opr_select = false;
let full_eqn = false;
let dividing = false;
let decimal = false;

function clear(){
    opr_select = false;
    full_eqn = false;
    dividing = false;
    decimal = false;
    display_val = "";
    display_eqn.textContent = "0";
    prev_eqn.textContent = "";
    prev_val = ""
}

const clear_button = document.querySelector(".clear");
clear_button.addEventListener("click",() =>{clear()});

const delete_button = document.querySelector(".del");
delete_button.addEventListener("click",()=>{
    display_val = display_val.slice(0,-1);
    display_eqn.textContent = display_val;
});

numbers.forEach((num) =>{
    num.addEventListener("click",() =>{
        if (display_val.length >= 16){
            return;
        }
        if (dividing && num.textContent == "0"){
            alert("Cannot divide by 0!");
            clear();
        }
        if (opr_select){
            full_eqn = true;
            opr_select = false;
        }

        display_val+= num.textContent;
        display_eqn.textContent = display_val;
        dividing = false;
    });
});

let operators = document.querySelectorAll(".opr");
operators.forEach((op) =>{
    op.addEventListener("click",()=>{
        if (op.textContent == "×") {
            opr = "*";
            dividing = false;
        }
        else if (op.textContent == "÷"){
            opr = "/";
            dividing = true;
        }
        else{
            opr = op.textContent;
            dividing = false;
        }
        if (display_val.slice(-1) == "."){
            display_val = display_val.slice(0,-1);
            display_eqn.textContent = display_val;
        }
        opr_select = true;
        prev_val = display_val;
        prev_eqn.textContent = (display_eqn.textContent|| "0" )+ " " + op.textContent;
        display_val = "";
        console.log(opr);
    });
});

let eval = document.querySelector(".equal");
eval.addEventListener("click", ()=>{
    if (full_eqn){
            prev_eqn.textContent += " " + display_eqn.textContent + " =";
            display_val =  Math.round(operate(Number(prev_val),opr,Number(display_val))*100000)/100000;
            display_eqn.textContent = display_val;
            
        }
    full_eqn = false;
    });
let dot = document.querySelector(".decimal");
dot.addEventListener("click",()=>{
    if (!decimal){
        decimal = true;
        display_val += ".";
        display_eqn.textContent = display_val;
    }
});
