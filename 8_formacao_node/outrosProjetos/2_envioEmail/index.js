const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

  host:'smtp.gmail.com',
  port: 587,
  secure: false,
  auth:{
    user:'michelvidal@gmail.com',
    pass: '&'
  }
});

transporter.sendMail({

  from: 'Michel <michelvidal2022@gmail.com>',
  to:'michelvidal65@outlook.com',
  subject:'Aplicação funcionou',
  text:'Primeiro e-mail enviado pelo node :)'
}).then(message => {
  console.log(message)
}).catch(err => {
  console.log(err)
}); 