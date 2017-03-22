window.addEventListener("load", function(){
  var send = document.getElementById("enviar");
  var result1 = document.getElementById("result1");
  var buttonradio = document.getElementsByClassName("q1");

send.addEventListener("click", function(event){
    event.preventDefault();
    function marcadas (array){
      var contador = 0;
      var correctas = 0;

        for(var i = 0; i<array.length; i++){
            if (array[i].checked==true){
               contador++
            }
        }

        if (array[0].checked==true){
          correctas++
        }
        if (array[4].checked==true){
          correctas++
        }
        if (array[8].checked==true){
          correctas++
        }

        if (contador<3){
          alert("responda todas las preguntas")
          return "";
        }
        return  "Tiene " + correctas + " respuestas correctas."
    }
    document.body.innerHTML=  marcadas(buttonradio);
  });
});
