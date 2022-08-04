function start () {
    var botaoCalcular = document.querySelector('#botaoCalcularImc')
    botaoCalcular.addEventListener('click',handlebotaoClick)

    handlebotaoClick()

    function calcularImc (weight, height) {
        let imcIndice = weight / (height * height)

        if (imcIndice < 18.5) {
            console.log('Abaixo do Peso')
        } else if (imcIndice>= 18.5 && imc < 25) {
            document.write('Peso Normal')
        } else if (imcIndice >= 25 && imc < 30) {
            document.write(' Sobrepeso')
        } else if (imcIndice >= 30 && imc < 35) {
            document.write(' Obesidade grau I')
        } else if (imcIndice >= 35 && imc < 40) {
           document.write(' Obesidade grau II')
        } else {
            document.write(' Obesidade grau III ou Morbida')
        }

        return imcIndice
         }

    function handlebotaoClick () {
        var inputweight = document.querySelector('#input-weight')
        var inputheight = document.querySelector('#input-height')

        var weight = Number(inputweight.value)
        var height = Number(inputheight.value)
        var imcResult = document.querySelector('#imcResultado')

        var imc = calcularImc (weight, height) 
        var formatarImc = imc.toFixed(2).replace('.', ',')
        imcResult.textContent = formatarImc
        var indice = indiceImc (weight, height)
       
    }




    
    



}
start()

