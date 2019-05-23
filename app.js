const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c"

canvas.width = 500;
canvas.height = 550;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 5.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event){
   if(filling === true){
       filling = false;
       mode.innerText = "Fill"
   }    else    {
       filling = true;
       mode.innerText = "Paint";
   }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
}
/*
1. 'onMouseUp'과 'onMouseLeave'의 값이 같으므로 겹치는
값은 객체지향으로 따로 함수로 설정한 후, 값을 함수
이름으로 대체
            function onMouseUp(event){
                stopPainting();
            }
            function onMouseLeave(event){
                stopPainting();
            } 
2. 'onMouseLeave', "onMouseUp' 함수를 또 만들지 말고 함수 이름을
바로 조건문에 입력
*/
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

if(colors){
    Array.from(colors).forEach(nameOfInsideItems => nameOfInsideItems.addEventListener("click", handleColorClick));
}
//'nameOfInsideItems'의 이름은 아무거나 해도 상관없다.

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}
