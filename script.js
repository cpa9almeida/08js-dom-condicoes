function carregar() {
    var msg = window.document.getElementsByld('msg')
    var img = window.documents.getElementsByld('foto')
    var data = new Date()
    var hora = data.getHours();
    msg.innerHTML = `Agora são $(hora) horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha(1).png'
        documents.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.scr = 'fototarde(1).png'
        documents.bod.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.scr = 'fotonoite(1).png'
        documents.bod.style.background = '#515154'

    }
}
