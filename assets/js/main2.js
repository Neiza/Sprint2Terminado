window.addEventListener("load", function(){
  var send = document.getElementById("enviar2");
  var result1 = document.getElementById("result1");
  var buttonradio = document.getElementsByTagName("input");

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
        if (array[3].checked==true){
          correctas++
        }
        if (array[7].checked==true){
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
