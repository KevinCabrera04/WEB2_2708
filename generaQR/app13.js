function generaQR() {
    let input1 = document.getElementById('nombre').value.trim();
    let input2 = document.getElementById("correo").value.trim();
    let input3 = document.getElementById("telefono").value.trim();
    let input4 = document.getElementById("institucion").value.trim();
    let input5 = document.getElementById("qr").value.trim();
    let textoCompleto = input1 + "," + input2 + "," + input3 + "," + input4 + "," + input5;

    console.log(textoCompleto);

    if (textoCompleto==",,,,") {
        alert("Por favor, ingresa al menos un dato para generar el código QR.");
        return;
    }
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%22413112576%22" + encodeURIComponent(textoCompleto);

    let qrImg= document.getElementById("img");
    qrImg.src = url;
    qrImg.alt = "Código QR generado";

    document.getElementById("qr").appendChild(qrImg);
}