
// Obtém o elemento canvas com id "myCanvas"
canvas = document.getElementById("myCanvas");

// Obtém o contexto 2D do canvas
ctx = canvas.getContext("2d");

// Define a cor inicial para "red" (vermelho)
color = "red";

// Inicia um novo caminho de desenho no contexto
ctx.beginPath();

// Define a cor do traço para a cor definida anteriormente
ctx.strokeStyle = color;

// Define a largura do traço para 2 pixels
ctx.lineWidth = 2;

// Desenha um arco no contexto, criando um círculo
ctx.arc(200, 200, 40, 0, 2 * Math.PI);

// Realiza o traçado do arco no canvas
ctx.stroke();

// Adiciona um ouvinte de evento de clique no canvas, chamando a função my_mousedown
canvas.addEventListener("mousedown", my_mousedown);

// Função que é chamada quando ocorre um clique no canvas
function my_mousedown(e) {
    // Obtém a cor selecionada do elemento com id "color"
    color = document.getElementById("color").value;
    console.log(color);
    
    // Calcula a posição do clique em relação ao canvas
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    
    // Chama a função circle para desenhar um círculo na posição do clique
    circle(mouse_x, mouse_y);    
}

// Função que desenha um círculo no contexto do canvas
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

// Função que limpa a área do canvas
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
