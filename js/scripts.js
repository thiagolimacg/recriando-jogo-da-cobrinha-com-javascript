let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";


function criarBg() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha() {
    for (let index = 0; index < snake.length; index++) {
        context.fillStyle =  "green";
        context.fillRect(snake[index].x, snake[index].y, box, box);
        
    }
}

function iniciarJogo() {
    criarBg();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //exclui o último elemento do array
    snake.pop();

    let newSnakeHead = {
        x: snakeX,
        y: snakeY
    }

    //adiciona um novo elemento no inicio do array
    snake.unshift(newSnakeHead);
}

let jogo = setInterval(iniciarJogo, 100);
