window.addEventListener('blur',() =>{
    document.title = 'sentimos sua falta...'
})

window.addEventListener('focus',() =>{
  document.title =  "AnimeMania"
})

var peagr=""
var divNova = document.createElement("div");
function chamar(){
    peagr = document.getElementById("textareamensagem").value
    document.getElementById('digitar').innerHTML += "<p>"+peagr+"</p>";

    

}
