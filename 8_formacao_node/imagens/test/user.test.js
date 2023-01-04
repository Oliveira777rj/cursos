let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

let mainUser = {name: 'Michel Oliveira', email: 'michel@email.com', password:'1234568'};

beforeAll(() => {
  //Inserir usuario no banco de dados
 return request.post('/user')
  .send(mainUser)
  .then(res => {})
  .catch(err => {console.log(err)})
})

afterAll(() => {
   return request.delete(`/user ${mainUser.email}`,)
  .then(res => {})
  .catch((err) => console.log(err))
});

describe('Cadastro de usuário',() => {
  test('Deve cadastrar um usúario com sucesso',() => {

    let time = Date.now();
    let email = `${time}@email.com`
    let user = {name: 'Victor', email, password:'123459'}

    return request.post('/user')
    .send(user)
    .then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body.email).toEqual(email);

    }).catch(err => {
      return(err)
    });
  });

  test('Deve impedir que um usúario se cadastre com os dados vazios',() => {

    let user = {name: '', email:'', password:''}

    return request.post('/user')
    .send(user)
    .then(res => {

      expect(res.statusCode).toEqual(400); // 400 = Bad Request
    }).catch(err => {
      return(err)
    });
  });

  test('Deve impedir que um usuário se cadastre com um e-mail repetido',() => {
   
    let time = Date.now();
    let email = `${time}@email.com`
    let user = {name: 'Victor', email, password:'123459'}

    return request.post('/user')
    .send(user)
    .then(res => {

      expect(res.statusCode).toEqual(200);
      expect(res.body.email).toEqual(email);

      return request.post('/user')
      .send(user)
      .then(res => {

        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual('E-mail já cadastrado!')

      }).catch(err => {
        fail(err)
      })

    }).catch(err => {
      return(err)
    })

  });
});

describe('Autenticação', () => {
  test('Deve me retornar um token quando logar', () => {
    return request.post('/auth')
    .send({email: mainUser.email, password: mainUser.password})
    .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toBeDefined();
    })
    .catch(err => {
      console.log(err)
    });
  });

  test('Deve impedir que um usuario cadastrado se logue',() => {
    
    return request.post('/auth')
    .send({email: 'umEmailQualquer', password: '55555'})
    .then(res => {
        expect(res.statusCode).toEqual(403);
        expect(res.body.errors.email).toEqual('E-mail não cadastrado');
    })
    .catch(err => {
      console.log(err)
    });
  });
  test('Deve impedir que um usuario se logue com uma senha errada',() => {
    
  return request.post('/auth')
    .send({email: mainUser.email, password:'senhaErrada'})
    .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.errors.password).toEqual('Senha incorreta');
    })
    .catch(err => {
      console.log(err)
    });
  });

});

