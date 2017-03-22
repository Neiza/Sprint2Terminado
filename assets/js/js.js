

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

window.addEventListener("load", function(){
	var coder = document.getElementById("coder");
	if (nombre=="undefined"){
	var nombre =prompt("Hola coder, cuál es tu nombre ?");
  }
	coder.innerHTML = nombre;


  var button1 = document.getElementById("sprint1");
  var button2 = document.getElementById("sprint2");
  var button3 = document.getElementById("sprint3");

  var record = document.getElementById("record");
  var printQuiz = document.getElementById("printQuiz");

  var frame = document.getElementById("quiz");
	var answer = document.getElementById("printAnswers");

  var contenido2 = "<br> <strong>Sprint 2: Introducción al desarrollo web y construcción de paginas web </strong> <br>"+
                    "<ol><li>Ciclo de vida del desarrollo web</li>"+
                    "<li>HTML y Javascript en el navegador</li>"+
                    "<li>Manejo de comandos básicos de git en la terminal</li>"+
                    "<li>pruebas unitarias</li>"+
                    "<li>Git/ Resolución de conflictos/ Branching model</li>"+
                    "<li>DOM</li></ol>"
  record.innerHTML = contenido2;

  button1.addEventListener("click", function(){
    var contenido1 = "<br> <strong>Sprint 1: Introducción a Javascriipt </strong> <br>"+
                      "<ol><li>Fundamentos de la Programación</li>"+
                      "<li>Funciones</li>"+
                      "<li>Arreglos</li>"+
                      "<li>Objetos</li></ol>";

    record.innerHTML = contenido1;
  });

  button2.addEventListener("click", function(){
    var contenido2 = "<br> <strong>Sprint 2: Introducción al desarrollo web y construcción de paginas web </strong> <br>"+
                      "<ol><li>Ciclo de vida del desarrollo web</li>"+
                      "<li>HTML y Javascript en el navegador</li>"+
                      "<li>Manejo de comandos básicos de git en la terminal</li>"+
                      "<li>pruebas unitarias</li>"+
                      "<li>Git/ Resolución de conflictos/ Branching model</li>"+
                      "<li>DOM</li></ol>"
    record.innerHTML = contenido2;
  });

  button3.addEventListener("click", function(){
    var contenido3 = "No hay lecciones (todavía)"
    record.innerHTML = contenido3;
  });

});
