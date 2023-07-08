function verificar() {
    var data = new Date()
    var ano = data.getFullyYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança 
                img.setAttribute('src','bebeMenino.jpeg')
            } else if (idade < 21) { 
                //jovem
                img.setAttribute('src','adolescenteHomen.jpeg')
            } else if (idade < 50) {
                //adulto 
                img.setAttribute('src','homemAdulto.jpeg')
            } else {
                //idoso
                img.setAttribute('src','homemIdoso.jpeg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher' 
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','bebeMenina.jpeg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','adolescenteMulher.jpeg')
            } else if (idade < 50) {
                //aduto
                img.setAttribute('src','mulherAdulta.jpeg')
            } else {
                //idoso 
                img.setAttribute('src','mulherIdosa.jpeg')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos $(gênero) com &(idade) anos.`
        res.appendChild(img)
    }   
}