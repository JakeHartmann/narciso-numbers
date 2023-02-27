// Global variables
let inputNum;

function getInputValue(){
    let inputNumber = document.getElementById("number").value;
    inputNum = inputNumber;
    checkNarciso(inputNum);
    document.getElementById("form").reset();
}

// Treats number as an array and displays all of its indexes
function getDigits(number)
{
    return Array.from(String(number), Number);
}

function checkNarciso(numberToBeChecked){
    let list = getDigits(numberToBeChecked);
    console.log(list);
    const initValue = 0;
    let sexo = list.reduce((sum, num) => sum + Math.pow(num, 3), initValue);
    console.log(sexo);

    let result = sexo == inputNum ? "Is Narciso" : "Not Narciso";
    console.log(result);

   }