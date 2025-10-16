function Play(){
    
    var idade = parseFloat(document.getElementById("idade").value)
    
    var printIdade = document.getElementById("printIdade")

   if(idade >= 18){
   printIdade.textContent = idade + "-" + "Você é maior de idade"
   printIdade.style.color = "green"
   }else{
    printIdade.textContent = idade + "-" + "Você é menor de idade"
    printIdade.style.color = "red"
   }
}