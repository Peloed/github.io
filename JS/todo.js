const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDo"

let toDos = [];

function saveToDo(){
    //JSON.stringify() <-- JS의 모든 녀석을 스트링으로 만드는 녀석
    //그대로 저장하면, 단순 텍스트로 저장하게됨. 
    //JSON.stringify()를 이용해서 머레이 같은 느낌으로 저장함.
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

    //그리고 그 어레이 같은 느낌의 스트링을
    //JSON.parse() 로 받으면 어레이로 변환 뙇!

}


function deleteToDo(event){
    // 뭐가 부모 엘리먼트인지 확인할 때 target.parentElement를 씀.
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
    
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


// function sayHello(item){
//     // 각각 아이템이 뭔지 받는건 JS에서 자동으로 인식해줌 = item
//     console.log("hi " + item);
//     // = hi array[n]
// }

const saveToDos = localStorage.getItem(TODOS_KEY);
if(saveToDos != null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    
    // parsedToDos.forEach(sayHello);
    //어레이안의 아이템 하나당 한번씩 펑션을 실행시킴

    // parsedToDos.forEach((item) => console.log("hi ", item));
    // 위의 펑션 생성하고 진행한거를 한줄로 축약한 것. 
    // = arrow function(화살표 함수)

    parsedToDos.forEach(paintToDo);
    

}