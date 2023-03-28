export function Reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 300;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}

export function MostrarSkills() {
    var skillButton = document.getElementById('buttonSkill');
    if(skillButton.click){
        skillButton.style.animation = 'none';
        skillButton.style.display = 'none';   
    }
}

export default function EliminarTexto() {
    var contenedorTexto = document.getElementById("contenedorTexto");
    var frontendText = document.getElementById("frontendText");
    var developerText = document.getElementById("developerText");
    var tppDiv = document.getElementById("tppDiv");
    var bodyId = document.getElementById("bodyId");

        contenedorTexto.removeChild(frontendText);
        contenedorTexto.removeChild(developerText);
        tppDiv.style.display = "flex";
        bodyId.style.overflowY = "scroll";
}
