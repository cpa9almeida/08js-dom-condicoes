function verificar() {
    var data = new Date()
    var ano = data.getFullyYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança 
                img.setAttribute('src', 'bebeMenino.jpeg')
            } else if (idade < 21) { 
                //Jovem
                img.setAttribute('src', 'adolescenteHomen.jpeg')
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src', 'homemAdulto.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'homemIdoso.jpeg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher' 
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeMenina.jpeg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescenteMulher.jpeg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulherAdulta.jpeg')
            } else {
                //Idoso 
                img.setAttribute('src', 'mulherIdosa.jpeg')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML =  `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)
    }   
}