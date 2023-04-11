function relogio() {
    const elementoRelogio = document.querySelector(".relogio");

    const horaAtual = new Date();

    var img = document.querySelector('#imagem');

    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    const formatoHoras = 8;
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`

    const frase = document.querySelector('.frase');

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if (formatoHoras >= 0 && formatoHoras < 12) {
        document.body.style.backgroundImage = "url(café.jpg)"
        img.src = "cafegif.gif"

        //document.body.style.background =

    } else if (formatoHoras >= 12 && formatoHoras < 18) {
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/08/07/11/14/restaurant-2602736_960_720.jpg)"
        img.src = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"

    } else {
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/03/19/20/36/wine-1267427_960_720.jpg)"

        img.src = "https://cdn.pixabay.com/photo/2016/11/23/13/45/celebration-1852926_960_720.jpg"
    }

}

setInterval(relogio, 1000)