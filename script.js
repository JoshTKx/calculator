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

console.log(operate(2,"-",6));