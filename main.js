var label = document.getElementById("agorasao")
var image = document.getElementById("imagem")
var favicon = document.getElementById("favicon")

var horaAtual = new Date().getHours()
var periodo = ""

if (horaAtual <6) periodo = "madrugada"
else if (horaAtual >= 18) periodo = "noite"
else if (horaAtual < 12) periodo = "manhã" 
else periodo = "tarde" 

label.innerHTML = `Agora são ${horaAtual} hora${horaAtual==1?"":"s"} da ${periodo}!`

switch (periodo) {

    case "manhã":
        image.setAttribute("src", "imagens/manha.png")
        favicon.setAttribute("href", "imagens/manha.ico")
        document.body.style.background = "skyblue"
        break
        
    case "tarde":
        image.setAttribute("src", "imagens/tarde.png")
        favicon.setAttribute("href", "imagens/tarde.ico")
        document.body.style.background = "orange"
        break
        
    case "madrugada":
    case "noite":
        image.setAttribute("src", "imagens/noite.png")
        favicon.setAttribute("href", "imagens/noite.ico")
        document.body.style.background = "blue"
        break
}