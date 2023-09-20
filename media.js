const fprm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
//cria um ouvinte
form.addEdventListener("submit",(e)=>{e.preventDefault()
//evitar envio do form
const nome = form.inNome.value
//obtém o nome
const nota1 = Number(form.inNote1.value)
//obtém a primeira nota
const nota2 = Number(form.inNote2.value)
//obtém segunda nota
const media = (nota1 + nota2)/2
//média das notas
resp1.innerText = `Média das Notas ${media.toFixed(2)}`
})