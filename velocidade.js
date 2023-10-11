const fprm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
//cria um ouvinte
form.addEdventListener("submit",(e)=>{e.preventDefault()
//evitar envio do form
const nome = form.inNome.value
//obtém o nome
const nota1 = Number(form.inVelocidadePermitida.value)
//obtém a primeira nota
const nota2 = Number(form.inVelocidadeCondutor.value)
//obtém segunda nota
//média das notas
resp1.innerText = `Media Da Velocidade ${media.toFixed(2)}`
//criar as condições
if(media >=30 ){
resp2.innerText = `Ultrapassou o limite de velocidade`
resp2.style.color = "red"
} else if (media >=70) {
    resp2.innerText = `Sua velocidade esta no limite`
    resp2.style.color = "blue"
}
})


