// Global variables
let inputNum;

function getInputValue(){
    let inputNumber = document.getElementById("number").value;
    inputNum = inputNumber;
    checkNarciso(inputNum);
    // document.getElementById("form").reset();
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
    let cubeNumber = list.reduce((sum, num) => sum + Math.pow(num, 3), initValue);
    console.log(cubeNumber);

    let result = cubeNumber == inputNum ? "Is a Narciso number 👍" : "Isn't a Narciso number ❌";
    let isNarciso = cubeNumber == inputNum ? true : false;
    console.log(result);
    console.log(isNarciso);

    if(isNarciso){
        document.getElementById("result").innerHTML = "Is a Narciso number 👍";
    document.getElementById("result").classList.remove("incorrect");
    document.getElementById("result").classList.add("correct");
    }
    // document.getElementById("result").textContent = result;
    else{
        document.getElementById("result").innerHTML = "Isn't a Narciso number ❌";
    document.getElementById("result").classList.remove("correct");
    document.getElementById("result").classList.add("incorrect");
    }

   }