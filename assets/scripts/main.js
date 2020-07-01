// console.log("hola mundo")

//DOM
let links = document.querySelectorAll(".close");
  
links.forEach(function(link){
  link.addEventListener("click", function(evento){
    evento.preventDefault();
    let content = document.querySelector('.content')
    //Quitar las clases de animación que ya tiene
    content.classList.remove("animate__fadeInLeft");
    content.classList.remove("animate__animated")

    //Agregar clases para animar su salida fadeOutUp

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated")

    setTimeout(function(){
      location.href = "/boletines"
    },600);
    //setInterval
    
    return false;
  })
}) 
  


/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(":)");
  })
}); */
