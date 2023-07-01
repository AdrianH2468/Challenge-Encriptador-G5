//e = enter
//o = ober 
//i = imes 
//a = ai
//u = ufat
function encriptar() {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var texto_cifrado = texto.replace(/e/igm, "enter")
                            .replace(/o/igm, "ober")
                            .replace(/i/igm, "imes")
                            .replace(/a/igm, "ai")
                            .replace(/u/igm, "ufat");
    document.getElementById("img_der").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "inline-block";
}

function desencriptar() {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var texto_cifrado = texto.replace(/enter/igm, "e")
                            .replace(/ober/igm, "o")
                            .replace(/imes/igm, "i")
                            .replace(/ai/igm, "a")
                            .replace(/ufat/igm, "u");
    document.getElementById("img_der").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "inline-block";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
