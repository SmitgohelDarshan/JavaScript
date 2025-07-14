const num = 5;

let a = 0;
let b = 1;
let arr =[];

let fb = "";
function fibonacci(num){
    for(let i = 0 ; i < num ; i++){
        arr.push(a);
        //fb = fb.concat(a.toString()+",");// also use the if(i < num - 1 ? ",":"") for not add , in the last

        let c = a+b;
        a = b;
        b = c;     
    }
    return arr;
    //return fb;
}


console.log("Fibonacci Serires of the given number of term is:",fibonacci(num));
