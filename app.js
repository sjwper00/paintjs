const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");


canvas.width = 500;
canvas.height = 550;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 5.0;

let painting = false;

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
}

Array.from(colors).forEach(nameOfInsideItems => nameOfInsideItems.addEventListener("click", handleColorClick));
//'nameOfInsideItems'의 이름은 아무거나 해도 상관없다.