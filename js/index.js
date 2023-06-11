const { createElement } = require("react/cjs/react.production.min")

var input = document.getElementById('CEP')
const cep = input.value

function fetchapi()
{ 
    var input = document.getElementById('CEP')
    const cep = input.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((response) => response.json()).then((data) =>{
        const cep = data.cep
        const logradouro = data.logradouro
        const bairro = data.bairro
        const localidade = data.localidade
        const Uf = data.uf

        
        const texto2 = document.createElement("li");
            texto2.innerHTML = logradouro;
                document.getElementById("container").appendChild(texto2);

        
        const texto1 = document.createElement("li");
            texto1.innerHTML = bairro;
                document.getElementById("container").appendChild(texto1);
        const texto4 = document.createElement("li");
            texto4.innerHTML = localidade;
                document.getElementById("container").appendChild(texto4);

        const texto6 = document.createElement("li");
            texto6.innerHTML = Uf;
                document.getElementById("container").appendChild(texto6);
        

        const texto0 = document.createElement("li");
        texto0.innerHTML = cep;
                document.getElementById("container").appendChild(texto0);
   })

   // habilitar o botão reiniciar
    document.getElementById("btnReiniciar").style.display = 'inline';
}
clearInterval(fetchapi)


   // recarregar a página
function recarregarAPagina(){
    window.location.reload();
} 