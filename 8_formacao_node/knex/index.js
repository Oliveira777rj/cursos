
var database = require('./database');

/*  INSERT
var dados = [

    {
      nome : 'Metal Gear',
      preco : 74.4,
    },
    {
      nome : 'God of war',
      preco : 110.3
    },

]
database.insert(dados).into('games').then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
});
*/

/* SELECT
database.select('').table('games').then(data => {
 console.log(data)
}).catch(err => {
  console.log(err)

});
*/

/* WHERE
 database.select(['id','nome','preco'])
 .whereRaw('preco >= 100')
 .table('games').then(data => {
  console.log(data)
 }).catch(err => {
  console.log(err)
 })
*/

/* DELETE
database.where({id:4}).delete().table('games').then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
*/

/* UPDATE
database.where({id:3}).update({preco:120}).table('games').then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
});
*/

database.select().table('games').orderBy('preco', 'desc').then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
}); // desc = descrescente  /  asc = crescente


