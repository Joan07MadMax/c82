var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line - 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    wuidth_of_line = document.getElementById("width_of_line")


    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    corrent_position_of_mouse_x = e.clientx - canvas.offsetleft;
    corrent_position_of_mouse_y = e.clientx - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidthw = width_of_line;

        console.log("Ultima posisión de coordenadas X y Y = ");
        console.log("x = " + last_position_of_mouse_x + "y = " + last_position_of_mouse_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        
        console.log("Posición actual de cordenadas X y Y = ")
        console.log("x = " + corrent_position_of_mouse_x + "y = " + corrent_position_of_mouse_y);
        ctx.lineTo(corrent_position_of_mouse_x, corrent_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_x = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}