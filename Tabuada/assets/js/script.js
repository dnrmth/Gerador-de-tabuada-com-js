function contar(){
    var num = document.querySelector('input#txtn')
    var res = document.getElementById('tabuada')
    var n = Number(num.value)
    for(let c = 1; c <= 10; c++){
        var op = document.createElement('option')
        op.text = `${n} x ${c} = ${n*c}`
        op.value = `tab${c}`
        res.appendChild(op)
    }
}



















































/*
function contar(){
    var n = Number(document.getElementById('txtn').value)
    var tab = document.getElementById('tabuada')
    if(n == 0){
        window.alert('Por favor, insira um numero.')
    }
    else {
        for(let c = 1; c <= 10; c++){
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `tab${c}`
            tab.appendChild(op)
        }
    }
}
*/