import mongoose from 'mongoose';
import articleModel from './article';

mongoose.connect('mongodb://localhost:27017/aprendendoMongo')

const Article = mongoose.model('Article', articleModel);

Article.find({}).then(article => {
  console.log(article)
}).catch(err => {
  console.log(err)
})

/*
Article.findByIdAndDelete({'_id':'6369b1bbf7fa5a352fe41b09'}).then(() => {
  console.log('Dado removido')
}).catch(err => {
  console.log(err)
})

 */

/*
Article.findByIdAndUpdate('6369ae6d7edd0508362a17e6', {
  body: 'Editando mongoDB'
}).then(() => {
  console.log('Editado com sucesso')
}).catch(err => {
  console.log(err)
})
*/


/* BUSCA
Article.find({'_id':'6369b1bbf7fa5a352fe41b09'}).then(article => {
  console.log(article)
}).catch(err => {
  console.log(err)
})
 */


/*  BUSCA
Article.find({}).then(articles => {
  console.log(articles)
}).catch(err => {
  console.log(err)
})

*/


/* CADASTRO
const artigo = new Article({
    title:'Segunda conexão', 
    author: 'Oliveira', 
    body:'Continuando Aprendendo mongoDB',
    special: true,
    resume: {
      content:'Conteudo',
      author: 'Autor'
    }
    })

artigo.save().then(() => {

  console.log('Artigo salvo no Banco de Dados!')
}).catch(err => {
  console.log(err)
});
*/








