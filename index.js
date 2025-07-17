let div = document.querySelector("div")
let input = document.querySelector("input")
let finalinput = input.value * 49.86
let myfun = function(dolar){
    var dola = dolar * 49.48
    dola.toFixed(2)
    div.innerText = `{${dolar}} USD Dollar = {${dola}} Egyptian Pound`
}
myfun
