const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },{
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: "엘버트 허버드",
    },{
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
        author: "마르쿠스 아우렐리우스 안토니우스",
    },{
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author: "랄프 왈도",
    },{
        quote: "계단을 밟아야 계단 위에 올라설수 있다",
        author: "터키속담",
    },{
        quote: "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
        author: "간디",
    },{
        quote: "나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다.",
        author: "맥아더",
    },{
        quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다",
        author: "맹자",
    },{
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라. ",
        author: "마크 트웨인",
    },{
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다",
        author: "발타사르 그라시안",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randoms = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randoms];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
