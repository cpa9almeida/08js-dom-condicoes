function verificar () {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novament!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade =  ano - Number(fano.value)
        var gênero = '' 
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeMemimo.jpeg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescenteHomem.jpeg')
            } else if (idade < 50 ) {
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
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'mulherAdulta.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulherIdosa.jpeg')
            }
        }
        res.style.textAligt = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img) 
    }
}