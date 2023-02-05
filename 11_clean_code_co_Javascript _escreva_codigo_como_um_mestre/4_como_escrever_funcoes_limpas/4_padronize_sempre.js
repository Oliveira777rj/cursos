// Padronize nome de variaveis, funções e objetos


getUserData()
getProductRecord()
getEmailInfo()

// Padronizando a funções
getUserData()
getProductData()
getEmailData()



let users = [{name: 'a'}, {name:'b'}]


AddUserFromFacebook(users);
GetFirstUser(users);

function AddUserFromFacebook(users){
  users.push({name:'c'});

  let isMonday = true;

  if(isMonday){
    users.length = 0;
  }else{
    
  }
}

function GetFirstUser(users){
  return users[0]
}