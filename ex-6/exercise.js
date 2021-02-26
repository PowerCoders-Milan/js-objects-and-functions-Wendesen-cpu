// write your JS here
// remember to always test in the browser
// to see if everything works correctly


function greatNum(a,b){

    if(a > b){
        window.alert(`${a} is greater than ${b}`);
    
    }

    else if(a < b){
        window.alert(`${b} is greater than ${a}`);
    }

    else{
        window.alert("The two numbers are equal");
    }
}

var x = window.prompt("Insert the first number");
var y = window.prompt("Insert the first number");

greatNum(x,y);

var r = window.prompt("Insert another number");
var s = window.prompt("Insert the second pair number");

greatNum(r,s);






