const frm = document.querySelector("form")
const respo = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const pessoas = Number(frm.inNumero.value)
    const peixe = Number(frm.inPeixe.value)
    let resultado 
    if(peixe > pessoas) {
        resultado + (pessoas * 20) + ((pexe - pessoas) * 12)
        } else {
            resultado = pessoas * 20
        }
    resp.innerText = `N de pessoas:${pessoas}\n
                     N de peixe:${peixe}\n
                     Pagar: R$ ${resultado.toFixed(2)}`
})