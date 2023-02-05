const loginForm = document.querySelector("#login-before form");
const loginId = document.querySelector(".box input:first-child");
const loginPw = document.querySelector(".box input:nth-child(2)");
const greeting = document.querySelector("#greeting");
const loginBefore =document.querySelector("#login-before"); 
const loginAfter = document.querySelector("#login-after");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const PASSWORD_KEY = "password";
const USER_INFO = "user";

const userId = "nico";
const userPw = "thank";

function onLoginForm(event){
    const ID = loginId.value;
    const PW = loginPw.value;

    const checkID = {
        username:ID,
        password:PW,
    };
    
    localStorage.setItem(USER_INFO, JSON.stringify(checkID));
    
}

function paintGreetings(){

}
loginForm.addEventListener("submit", onLoginForm);
const checkUser = JSON.parse(localStorage.getItem(USER_INFO));


if(checkUser != null){
if(checkUser.username != userId || checkUser.password != userPw){
    loginAfter.classList.add(HIDDEN_CLASSNAME);
    loginBefore.classList.remove(HIDDEN_CLASSNAME);

    localStorage.clear(USER_INFO);
}else if(checkUser.username === userId && checkUser.password === userPw){
    greeting.innerText = "오늘 할 일은 아래와 같습니다!"
    loginAfter.classList.remove(HIDDEN_CLASSNAME);
    loginBefore.classList.add(HIDDEN_CLASSNAME);
};}else{
    loginBefore.classList.remove(HIDDEN_CLASSNAME);
    
};