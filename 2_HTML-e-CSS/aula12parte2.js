var agora = new Date()
var hora = agora.getHours();

if(hora < 12){

    console.log(`São exatamente ${hora} horas, BOM DIA.`)

}
else if(hora < 18){

    console.log(`São exatamente ${hora} horas, BOA TARDE.`)

}
else{
    console.log(`São exatamente ${hora} horas, BOA NOITE.`)

}