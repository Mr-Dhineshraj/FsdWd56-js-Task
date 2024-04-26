const container=document.createElement("div");
const calculator=document.createElement("div");
const form=document.createElement("form")
const viewPort=document.createElement("div");
const inputText=document.createElement("input");
const div1=document.createElement("div");
const inputClear=document.createElement("input");
const inputDelete=document.createElement("input");
const inputModules=document.createElement("input");
const inputDivide=document.createElement("input");
const div2=document.createElement("div");
const inputSeven=document.createElement("input");
const inputEight=document.createElement("input");
const inputNine=document.createElement("input");
const inputAsterisk=document.createElement("input");
const div3=document.createElement("div");
const inputFour=document.createElement("input");
const inputFive=document.createElement("input");
const inputSix=document.createElement("input");
const inputMinus=document.createElement("input");
const div4=document.createElement("div");
const inputOne=document.createElement("input");
const inputTwo=document.createElement("input");
const inputThree=document.createElement("input");
const inputPlus=document.createElement("input");
const div5=document.createElement("div");
const inputZero=document.createElement("input");
const inputDoubleZero=document.createElement("input");
const inputDot=document.createElement("input");
const inputEqual=document.createElement("input");


container.setAttribute("class","container-fluid d-flex justify-content-center align-items-center");
calculator.setAttribute("class","calculator");
viewPort.setAttribute("class","viewPoint");

inputText.setAttribute("class","display");
inputText.setAttribute("type","text");

inputClear.setAttribute("type","button");
inputClear.setAttribute("value","AC");
inputDelete.setAttribute("type","button");
inputDelete.setAttribute("value","DEL");
inputModules.setAttribute("type","button");
inputModules.setAttribute("value","%");
inputDivide.setAttribute("type","button");
inputDivide.setAttribute("value","/");

inputSeven.setAttribute("type","button");
inputSeven.setAttribute("value","7");
inputEight.setAttribute("type","button");
inputEight.setAttribute("value","8");
inputNine.setAttribute("type","button");
inputNine.setAttribute("value","9");
inputAsterisk.setAttribute("type","button");
inputAsterisk.setAttribute("value","*");

inputFour.setAttribute("type","button");
inputFour.setAttribute("value","4");
inputFive.setAttribute("type","button");
inputFive.setAttribute("value","5");
inputSix.setAttribute("type","button");
inputSix.setAttribute("value","6");
inputMinus.setAttribute("type","button");
inputMinus.setAttribute("value","-");

inputOne.setAttribute("type","button");
inputOne.setAttribute("value","1");
inputTwo.setAttribute("type","button");
inputTwo.setAttribute("value","2");
inputThree.setAttribute("type","button");
inputThree.setAttribute("value","3");
inputPlus.setAttribute("type","button");
inputPlus.setAttribute("value","+");

inputZero.setAttribute("type","button");
inputZero.setAttribute("value","0");
inputDoubleZero.setAttribute("type","button");
inputDoubleZero.setAttribute("value","00");
inputDot.setAttribute("type","button");
inputDot.setAttribute("value",".");
inputEqual.setAttribute("type","button");
inputEqual.setAttribute("value","=");



container.appendChild(calculator);
calculator.appendChild(form);
form.appendChild(viewPort);
viewPort.appendChild(inputText);

form.append(div1,div2,div3,div4,div5);
div1.append(inputClear,inputDelete,inputModules,inputDivide);
div2.append(inputSeven,inputEight,inputNine,inputAsterisk);
div3.append(inputFour,inputFive,inputSix,inputMinus);
div4.append(inputOne,inputTwo,inputThree,inputPlus);
div5.append(inputZero,inputDoubleZero,inputDot,inputEqual);

document.body.appendChild(container);


const numberButtons=[inputZero, inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven, inputEight, inputNine, inputDoubleZero];
numberButtons.forEach(button=>{
    button.addEventListener("click",function(){
        inputText.value += button.value;
    });
});

inputClear.addEventListener('click',function(){
    inputText.value="";
});

inputDelete.addEventListener('click',function(){
    inputText.value=inputText.value.toString().slice(0,-1);
});

inputModules.addEventListener('click',function(){
    inputText.value +="%";
});

inputDivide.addEventListener("click",function(){
    inputText.value +="/";
})

inputMinus.addEventListener("click",function(){
    inputText.value +="-";
})
inputPlus.addEventListener("click",function(){
    inputText.value +="+";
})
inputAsterisk.addEventListener("click",function(){
    inputText.value +="*";
});

inputDot.addEventListener("click",function(){
    inputText.value +=".";
});

inputEqual.addEventListener('click',function(){
    if(inputText.value){
    inputText.value=eval(inputText.value);
    }else{
        inputText.value='ERROR'
    }
})







let one = "1";
inputOne.addEventListener('click',function(one){
    document.getElementsByClassName('display').one +=one

})

function handleToclearElements(){
    document.getElementById('display').value = "" ;
}
let addToDispaly=function handleToAdd(value){
    document.getElementById('display').value +=value
};
function handleTobackspace(){
    document.getElementById('display').value=document.getElementById('display').value.toString().slice(0,-1);
}

function handleToCalculate(){
    const expression=document.getElementById('display').value;
    const result=eval(expression);
    document.getElementById('display').value=result;

};

let display=document.getElementById("display");

inputText.addEventListener("keydown",function(event){
    let key=event.key;
    if(!isNaN(parseInt(key))){
        handleToAdd(key);
    }else if(key==='Enter'){
        handleToCalculate();
    }else if(key==='Backspace'){
        handleTobackspace();
    }
    else{
        alert("Only numbers are allowed");
    }
})