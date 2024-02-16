// Triangle area
document.getElementById('calculate-btn').addEventListener('click', function(e){
    const inputBase = document.getElementById('input-base');
    const inputBaseValue = inputBase.value;
    const base = parseFloat(inputBaseValue);
    inputBase.value='';

    const inputHeight = document.getElementById('input-height');
    const inputHeightValue = inputHeight.value;
    const height = parseFloat(inputHeightValue);
    console.log(base + height);
    inputHeight.value='';

    const areaCalculation = 0.5 * base * height;
    const areaSum = document.getElementById('area-calculation');
    areaSum.innerText= areaCalculation;
})

// Rectangle area
document.getElementById('rectangle-calculate-btn').addEventListener('click', function(e){
    const inputWidth = document.getElementById('input-width');
    const inputWidthValue = inputWidth.value;
    const width = parseFloat(inputWidthValue);
    inputWidth.value='';

    const inputLength = document.getElementById('input-length');
    const inputLengthValue = inputLength.value;
    const length = parseFloat(inputLengthValue);
    inputLength.value = '';

    const rectangleArea = width * length;
    const recArea = document.getElementById('rec-area');
    recArea.innerText = rectangleArea;
})

// Parallelogram

document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(e){
    const userInputBase = document.getElementById('input-b')
    const userInputBaseValue = userInputBase.value;
    const userBase = parseFloat(userInputBaseValue);
    userInputBase.value='';

    const userInputHeight = document.getElementById('input-h');
    const userInputHeightValue = userInputHeight.value;
    const userHeight= parseFloat(userInputHeightValue);
    userInputHeight.value ='';
    const parallelogramAreaSum  = userBase * userHeight;
    const parallelogramArea= document.getElementById('parallelogram-area');
    parallelogramArea.innerText= parallelogramAreaSum;
})

// Rhombus formula

document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){
    // First input
    const diagonal1= document.getElementById('input-diagonal1');
    const diagonal1Value = diagonal1.value;
    const d1 = parseFloat(diagonal1Value);
    diagonal1.value = '';

    // Second input
    const diagonal2 = document.getElementById('input-diagonal2')
    const diagonal2Value = diagonal2.value;
    const d2 = parseFloat(diagonal2Value);
    diagonal2.value = '';
    // Rhombus formula
    const rhombusAreaFormula = 0.5 * d1 * d2;
    const rhombusArea = document.getElementById('rhombus-area-calculation');
    rhombusArea.innerText=rhombusAreaFormula;
})

// Pentagon formula
document.getElementById('pentagon-calculate-btn').addEventListener('click', function(event){
    // First Input value
    const firstPentagonInput = document.getElementById('input-p');
    const firstPentagonInputValue = firstPentagonInput.value;
    const p = parseFloat(firstPentagonInputValue);
    firstPentagonInput.value ='';

    // Second Input value
    const secondPentagonInput = document.getElementById('second-input');
    const secondInputValue = secondPentagonInput.value;
    const secondInput = parseFloat(secondInputValue);
    secondPentagonInput.value = '';

    // Pentagon Formula
    const pentagonAreaFormula = 0.5 * p * secondInput;
    const pentagonAreaOutput = document.getElementById('pentagon-area-calculation');
    pentagonAreaOutput.innerText=pentagonAreaFormula;
})

// Ellipse Formula re use 
function ellipseCalculate(){
    const x = getElementById('ellipse-first-input');
    const y = getElementById('ellipse-second-input');
    const pi=3.1416
    const ellipseResult = pi * x * y;
    // console.log('Ellipse sum is :', ellipseResult);
    setAreaResult('ellipse-area-calculation', ellipseResult);
}

function getElementById(userInput){
    const ellipseUserInput = document.getElementById(userInput);
    const userInputValue = ellipseUserInput.value;
    const userInputNumber = parseFloat(userInputValue);
    ellipseUserInput.value='';
    // console.log(firstUserInput);
    return userInputNumber;
}

function setAreaResult (elementId, area){
    const setResult = document.getElementById(elementId);
    setResult.innerText=area;
}

