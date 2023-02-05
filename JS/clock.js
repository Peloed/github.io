const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getDate()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//처음부터 표시하기 위해 실행
getClock()
//매 1초마다 표시
setInterval(getClock, 1000);