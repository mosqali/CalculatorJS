let firstNumb;
let secondNumb;
let result;
let currentOperator;
let btnWithZero;
let removeResult =  undefined;
let Comma = true;
let alreadyOperatorBtn = false;
let inputFullHistory;
let calculateOrOperator = false;
let currentNumber;
let calcButton = true;
let savedOperator;
let savedSecondNumb;
let currentNumbForOperatorCalc;
let useOperatorButtonForCalculation = false;

let input = document.getElementById("input");
let inputHistory = document.getElementById("inputHistory")

function Display(button){
  if(removeResult == true){
    input.value = "";
  }
  input.value += button;
  removeResult = false;
}

function DisplayComma(button){
  if(Comma == true){
    if(input.value == ""){
      btnWithZero = "0" + button;
      input.value += btnWithZero;
    }
    else{
      input.value += button;
    }
    Comma = false;
    removeResult = false;
  }
}

function DisplayZero(button){
  if(input.value != ""){
    input.value += button;
  }
}

function Operator(btnOperator){
  console.log(useOperatorButtonForCalculation);
  if(useOperatorButtonForCalculation != true){
    if(calculateOrOperator != false){
      Calculate();
      currentNumbForOperatorCalc = input.value;
      useOperatorButtonForCalculation = true;
    }
    else{
      if(input.value == ""){
        input.value = "0";
      }
      if(alreadyOperatorBtn == false){
        firstNumb = input.value;
        input.value = "";
        alreadyOperatorBtn = true;
        Comma = true;
      }
    }
    currentOperator = btnOperator;
    inputHistory.value = firstNumb + currentOperator;
    calculateOrOperator = true;
  }
  else{
    savedOperator = btnOperator;
    savedSecondNumb = parseFloat(input.value);
    switch(savedOperator){
      case'+':
      result = parseFloat(savedSecondNumb) + parseFloat(currentNumbForOperatorCalc);
      input.value = result;
      inputHistory.value =  currentNumbForOperatorCalc + savedOperator + savedSecondNumb + "=";
        break;
      case'-':
      result = parseFloat(savedSecondNumb) - parseFloat(currentNumbForOperatorCalc);
      input.value = result;
      inputHistory.value =  currentNumbForOperatorCalc + savedOperator + savedSecondNumb + "=";
        break;
      case'*':
      result = parseFloat(savedSecondNumb) * parseFloat(currentNumbForOperatorCalc);
      input.value = result;
      inputHistory.value =  currentNumbForOperatorCalc + savedOperator + savedSecondNumb + "=";
        break;
      case'/':
      result = parseFloat(savedSecondNumb) / parseFloat(currentNumbForOperatorCalc);
      input.value = result;
      inputHistory.value =  currentNumbForOperatorCalc + savedOperator + savedSecondNumb + "=";
        break;
    }
  console.log(currentNumbForOperatorCalc, savedOperator, savedSecondNumb);
  currentNumbForOperatorCalc = input.value;
  }
  removeResult = true;
}

function OperatorCalculation(){

}

function DeleteAll(){
  input.value = "";
  inputHistory.value = "";
  btnOperator = "";
  firstNumb = "";
  secondNumb = "";
  Comma = true;
  alreadyOperatorBtn = false;
  useOperatorButtonForCalculation = false;
}

function DeleteLastChar(){
  currentNumber = input.value;
  currentNumber = currentNumber.substring(0, currentNumber.length -1)
  input.value = currentNumber;
}

function Calculate(){
  if(input.value == ""){
    input.value = "0";
  }
  if(removeResult != false){
    currentNumber = parseFloat(input.value);
    switch(savedOperator){
      case'+':
        input.value = currentNumber + parseFloat(savedSecondNumb);
        inputHistory.value = currentNumber + savedOperator + savedSecondNumb + "=" + input.value;
        break;
      case'-':
        input.value = currentNumber - parseFloat(savedSecondNumb);
        inputHistory.value = currentNumber + savedOperator + savedSecondNumb + "=" + input.value;
        break;
      case'*':
        input.value = currentNumber * parseFloat(savedSecondNumb);
        inputHistory.value = currentNumber + savedOperator + savedSecondNumb + "=" + input.value;
        break;
      case'/':
        input.value = currentNumber / parseFloat(savedSecondNumb);
        inputHistory.value = currentNumber + savedOperator + savedSecondNumb + "=" + input.value;
        break;
    }
  }
  else if(firstNumb != "" && input.value != ""){
    savedOperator = currentOperator;
    secondNumb = input.value;
    inputFullHistory = firstNumb + currentOperator + secondNumb + "=";
    if(currentOperator == "+"){
      result = parseFloat(firstNumb) + parseFloat(secondNumb);
      input.value = result;
      currentOperator = "";
      removeResult = true;
    }
    else if(currentOperator == "-"){
      result = parseFloat(firstNumb) - parseFloat(secondNumb);
      input.value = result;
      currentOperator = "";
      removeResult = true;
    }
    else if(currentOperator == "*"){
      result = parseFloat(firstNumb) * parseFloat(secondNumb);
      input.value = result;
      currentOperator = "";
      removeResult = true;
    }
    else if(currentOperator == "/"){
      if(secondNumb == "0" || secondNumb == "0.0"){
        window.alert("a number can not divided by 0")
        input.value = "";
        currentOperator = "";
        removeResult = true;
        result = 0;
      }
      else{
        result = parseFloat(firstNumb) / parseFloat(secondNumb);
        input.value = result;
        currentOperator = "";
        removeResult = true;
      }

    }
    inputHistory.value = inputFullHistory + result;
    firstNumb = "";
    savedSecondNumb = secondNumb;
    secondNumb = "";
    alreadyOperatorBtn = false;
    calculateOrOperator = false;
  }
useOperatorButtonForCalculation = false;
}

function Convert(){
  if(input.value != ""){
    let convertedInput = parseFloat(input.value) * (-1);
    input.value = convertedInput
  }
}

function Power(){
  if(input.value != "" ){
      currentNumber = input.value;
      result = parseFloat(currentNumber)** 2;
      if(result != "Infinity"){
        input.value = result;
        removeResult = true;
        inputHistory.value = currentNumber + "²";
      }
      else{
        window.alert("number too high")
      }
  }

}
