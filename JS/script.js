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

// 

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