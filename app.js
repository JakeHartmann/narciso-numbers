// Global variables
let inputNum;

function getInputValue(){
    let inputNumber = document.getElementById("number").value.trim();

    // Limit input to 40 digits
    if (inputNumber.length > 40) {
    inputNumber = inputNumber.substr(0, 20);
    document.getElementById("number").value = inputNumber;
  }

    inputNum = inputNumber;
    if(inputNum == ""){
        document.getElementById("result").textContent = "";
    }
    else{
    checkNarciso(inputNum);
    }
}

// Treats number as an array and displays all of its indexes
function getDigits(number)
{
   return Array.from(String(number), Number);
}

function checkNarciso(numberToBeChecked){
    let list = getDigits(numberToBeChecked);
    let numDigits = BigInt(list.length);

    let powerSum = BigInt(0);
    for(let i = 0; i < numDigits; i++)
    {
        let digit = BigInt(numberToBeChecked[i]);
        powerSum += digit ** numDigits;
    }

    /* console.log(list);
    const initValue = 0;
    let cubeNumber = list.reduce((sum, num) => sum + Math.pow(num, 3), initValue);
    console.log(cubeNumber); */

    if (powerSum == BigInt(numberToBeChecked)) {
        document.getElementById("result").innerHTML = "Is a Narciso number 👍";
        document.getElementById("result").classList.remove("incorrect");
        document.getElementById("result").classList.add("correct");
      } else {
        document.getElementById("result").innerHTML = "Isn't a Narciso number ❌";
        document.getElementById("result").classList.remove("correct");
        document.getElementById("result").classList.add("incorrect");
      }

    /* let result = powerSum == inputNum ? "Is a Narciso number 👍" : "Isn't a Narciso number ❌";
    let isNarciso = powerSum == inputNum ? true : false;
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
    } */

   }