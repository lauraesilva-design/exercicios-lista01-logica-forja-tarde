function Concluir(){
    var nome = document.getElementById("nome").value
    var descricao = document.getElementById("descricao").value
    var idade = parseFloat(document.getElementById("idade").value)
    var genero = document.getElementById("genero").value
    var hobby = document.getElementById("hobby").value

    var pessoaNome = document.getElementById("pessoaNome")
    var pessoaDescricao = document.getElementById("pessoaDescrição")
    var pessoaIdade = document.getElementById("pessoaIdade")
    var pessoaGenero = document.getElementById("pessoaGenero")
    var pessoaHobby = document.getElementById("pessoaHobby")

     pessoaNome.textContent= nome
     pessoaDescricao.textContent= descricao
     pessoaIdade.textContent= idade
     pessoaGenero.textContent= genero
     pessoaHobby.textContent= hobby 

}