var thisYear = 2021;

var input0 = parseInt(window.prompt("Inter the year you were born"));
var input1 = window.prompt("Inter the month you were born, Just the number of month only (1-12");
var input2 = window.prompt("Inter the day you were born");

var retire = parseInt(window.prompt("At what age do you want to get retired"));

function retirementCalculator(a,b,c,d,e){
    currentAge = a - b;
    leftOverYears = retire - currentAge;
    dateOfRetirement = currentAge + leftOverYears;
    year = "20";
    years = year.concat(dateOfRetirement);
    window.alert(`You have ${leftOverYears} years left until you can retire.`);
    window.alert(`It's ${a}, so you can retire at ${d}/${c}/${years}.`);
}

retirementCalculator(thisYear,input0,input1,input2,retire);
