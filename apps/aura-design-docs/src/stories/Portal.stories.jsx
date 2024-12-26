export default {
    title: 'Components/Portal',
    tags: ['autodocs'],
    component: <ar-portal style="height: 500px" />,
    argTypes: {
        content: { control: 'text' },
        src: { control: 'text' },
    },
};

export const Default = {
    args: {
        src: 'https://www.baidu.com'
    },
};

export const Content = {
    args: {
        content: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>贪吃蛇小游戏</title>
        <style>
            #gameCanvas {
                border: 1px solid black;
            }
        </style>
        </head>
        <body>
        <canvas id="gameCanvas" width="400" height="400"></canvas>
        <script>
            const canvas = document.getElementById('gameCanvas');
            const ctx = canvas.getContext('2d');
        
            const snakeSize = 10;
            let snake = [
                { x: 200, y: 200 },
                { x: 190, y: 200 },
                { x: 180, y: 200 }
            ];
        
            let food = { x: 0, y: 0 };
        
            let dx = 10;
            let dy = 0;
        
            function drawSnake() {
                snake.forEach(segment => {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
                });
            }
        
            function drawFood() {
                ctx.fillStyle = 'red';
                ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
            }
        
            function moveSnake() {
                const head = { x: snake[0].x + dx, y: snake[0].y + dy };
                snake.unshift(head);
        
                if (head.x === food.x && head.y === food.y) {
                    generateFood();
                } else {
                    snake.pop();
                }
            }
        
            function generateFood() {
                food.x = Math.floor(Math.random() * canvas.width / 10) * 10;
                food.y = Math.floor(Math.random() * canvas.height / 10) * 10;
            }
        
            function clearCanvas() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        
            function checkCollision() {
                if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
                    return true;
                }
        
                for (let i = 1; i < snake.length; i++) {
                    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                        return true;
                    }
                }
        
                return false;
            }
        
            function updateGame() {
                if (checkCollision()) {
                    // alert('Game Over!');
                    return;
                }
        
                clearCanvas();
                drawFood();
                moveSnake();
                drawSnake();
        
                setTimeout(updateGame, 100);
            }
        
            generateFood();
            updateGame();
        
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowUp' && dy === 0) {
                    dx = 0;
                    dy = -10;
                } else if (e.key === 'ArrowDown' && dy === 0) {
                    dx = 0;
                    dy = 10;
                } else if (e.key === 'ArrowLeft' && dx === 0) {
                    dx = -10;
                    dy = 0;
                } else if (e.key === 'ArrowRight' && dx === 0) {
                    dx = 10;
                    dy = 0;
                }
            });
        </script>
        </body>
        </html>`,
    },
};
