function criaObjetos() {
   var vazio = {};
   var pessoa = {
     "nome": "Asdrubal",
     "idade": 25
   };
   var time = {
     "nome": "Unidos da Esquina",
     "vitorias": [1961, 1975, 1982]
   };
   var autor = {
      "nome": "Asdrubal",
      "livro": {
         "titulo": "Horacio o dino",
         "ano": 2010
      }  
   };
   
   var objeto = JSON.parse(document.querySelector("#json-area").innerHTML);
   alert(objeto.temporario);
   
   var autorStr = JSON.stringify(autor);
   document.querySelector("#json-area").innerHTML = autorStr;

   var pessoaStr = JSON.stringify(pessoa);
   var pessoa2 = JSON.parse(pessoaStr);
   alert(pessoa2.nome);
}