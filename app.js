const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(event){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
} else {
    painting = false;
}

function onMouseUp(event){
    stopPainting();
}

/*
1. 'onMouseUp'과 'onMouseLeave'의 값이 같으므로 겹치는
값은 객체지향으로 따로 함수로 설정한 후, 값을 함수
이름으로 대체
function onMouseLeave(event){
    stopPainting();
} 
2. 'onMouseLeave'함수를 또 만들지 말고 함수 이름을
바로 조건문에 입력
*/
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMoouseUp);
    canvas.addEventListener("mouseleave", stopPainting());
}