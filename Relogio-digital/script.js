function relogio(){
    const date = new Date();
    
    let horas = document.getElementById("hour");
    horas.textContent = date.getHours() < 10 ? `0 ${date.getHours()}`:date.getHours();

    let minutos = document.getElementById("minute");
    minutos.textContent = date.getMinutes() < 10 ? `0 ${date.getMinutes()}`:date.getMinutes(); 

    let segundos = document.getElementById("second");
    segundos.textContent = date.getSeconds() < 10 ? `0 ${date.getSeconds()}`:date.getSeconds(); 
}

setInterval(() => {
    relogio();
},1000);

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());