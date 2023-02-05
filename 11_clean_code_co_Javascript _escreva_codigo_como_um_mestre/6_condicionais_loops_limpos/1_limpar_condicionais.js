function Login(isAdmin, isLogged, isWifi){

  if(isLogged){
    if(isAdmin){
      AccessAdminPanel()
    }else{
      console.log('Só pode entrar aqui se for adm!')
    }
  }else{
    console.log('Só pode entrar aqui quem estiver logado!')
  }
}

if(!isWifi){
  console.log('Só pode entrar aqui quem estiver no modo WIFI!')
  return
}
if(!isAdmin){
  console.log('Só pode entrar aqui se for adm!')
  return
}
if(!isLogged){
  console.log('Só pode entrar quem estiver logado!')
  return
}

let country = 'Brasil'

let person = ''

if(country == 'Brasil'){
  person = 'Brasileiro'
}else{
  person ='Outro'
}

// Operador ternario
let person1 = (country == 'Brasil') ? 'Brasileiro' : 'Outro'

let person2 = (country == 'Spain') ? 'Spanish' : 'Outro'

