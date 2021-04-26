
function carregar(){

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var horario = data.getHours();
    var hora = data.toLocaleTimeString();
    msg.innerHTML = `Agora são ${hora} horas.`
   
    if (horario >= 0 && horario < 12){
        img.src ="img/manha.png"
        document.body.style.background = '#e2cd9f';
    }else if (horario >=12 && horario <18){
        img.src ="img/tarde.png"
        document.body.style.background = '#b9846f';
    }else{
        img.src ="img/noite.png"
        document.body.style.background = '#515154';
    }
}
var timer=setInterval(carregar,1000);
