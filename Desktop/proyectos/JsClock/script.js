setInterval(marcador, 1000)

const manecillaHoras = document.querySelector('[data-manecilla-horas]');
const manecillaMinutos = document.querySelector('[data-manecilla-minutos]');
const manecillaSegundos = document.querySelector('[data-manecilla-segundos]');

function marcador(){
    const fechaDeHoy = new Date();
    const segundos =  fechaDeHoy.getSeconds() / 60;
    const minutos =  (segundos + fechaDeHoy.getMinutes()) / 60;
    const horas =  (minutos + fechaDeHoy.getHours()) / 12;
    
    rotacionMarcador(manecillaSegundos, segundos)
    rotacionMarcador(manecillaMinutos, minutos)
    rotacionMarcador(manecillaHoras, horas)
};

function rotacionMarcador(elemento, movimientoRotacion){
    elemento.style.setProperty('--rotacion', movimientoRotacion * 360)
}
marcador();