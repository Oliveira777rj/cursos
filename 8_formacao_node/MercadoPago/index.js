const express = require('express');
const MercadoPago = require('mercadopago');
const port = 3000;
const app = express();

MercadoPago.configure({
  sandbox: true,
  access_token:'
});

app.get('/',(req,res) => {
  res.send('Ola mundo')
});

app.get('/pagar', async (req,res) => {

  var id = '' + Date.now();
  var emailDoPagador = 'michel@email.com';

  var dados = {

    items: [
      item = {
        id: id,
        title: '2x video games',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: parseFloat(500)
      }
    ],
    payer:{
      email:emailDoPagador
    },
    external_reference: id
  }

  try{

    var pagamento = await MercadoPago.preferences.create(dados);
    console.log(pagamento);
    return res.redirect(pagamento.body.init_point);
    // Boa pratica salvar dados da compra - Banco.salvarPagamento({id:id, pagador: emailDoPagador})
  }catch(err){
    return res.send(err.message);
  }
});

app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:3000/')
});
