const fprm = document.querySelector("form")
const resp = document.querySelector("BoutResp")
const resp1 = document.querySelector("BoutResp1")

form.addEvent("ubmit", (e)=>{
    e.preventDEfault()
    const ladoA = Number(form,inLadoA.value)
    const ladoB = Number(form,inLadoB.value)
    const ladoC = Number(form,inLadoC.value)

    if{(ladoA> ladoB + ladoC) || (ladoB> ladoA + ladoC)|| (ladoC> ladoA + ladoB)}{
        alert("Essas medidas não podem formar um triangulo, Um do lado não pode ser maior que a soma")
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }
    resp.innerText =`Lado podem formar um triangulo`
    if(ladoA ==ladoB && ladoA == ladoC){
        resp1.innerText = `Tipo:Equiláero`
    }else if(ladoA == ladoB) || (ladoA == ladoC) ||(ladoB == ladoC){
        resp1.innerText = `Tipo:Isólece`
    }else{  
                resp1.innerText = `Tipo:Escalano`
}
})