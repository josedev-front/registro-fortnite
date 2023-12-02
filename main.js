const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Asegúrate de tener la función upload definida aquí
 function upload(req, res, callback) {
//   // ... lógica de upload
 }

app.post('/enviar', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);

      res.send('Error al subir los archivos.');
    } else {
      // Datos personales
      const nombre = req.body.nombre;
      const apellido = req.body.apellido;
      const correo = req.body.correo;
      const telefono = req.body.telefono;
      const nickname = req.body.nickname;
      const pais = req.body.pais;
      const steamuser = req.body.steamuser;

      const destinatario1 = 'recibir-bitgaming@marysstyle.cl';
      const destinatario2 = correo;

      var min = 1000000;
      var max = 10000000;
      var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

      // Configuración del transporte
      const transporter = nodemailer.createTransport({
        host: 'mail.marysstyle.cl',
        port: 465,
        auth: {
          user: 'enviar-bitgaming@marysstyle.cl',
          pass: '/Sejot_12/'
        }
      });

      // Configuración del correo electrónico al correo del hosting
      const mailOptions = {
        from: 'enviar-bitgaming@marysstyle.cl',
        to: destinatario1,
        subject: `Confirmación de recepción de formulario #${numeroAleatorio}`,
        text: `Estimado ${nombre} ${apellido},\n\nEs un gusto saludarte. Mediante este correo electrónico, te confirmamos la recepción de tu formulario con el número de referencia ${numeroAleatorio}. Agradecemos tu interés en nuestros servicios.
        \n${nombre}
        \n${apellido}
        \n${correo}
        \n${telefono}
        \n${nickname}
        \n${pais}
        \n${steamuser}`
      };





      // Envío del correo electrónico
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error al enviar el correo electrónico.');
        } else {
          console.log('Correo electrónico enviado: ' + info.response);
        }
        });


          // Configuración del correo electrónico al usuario
          const mailOptions2 = {
            from: '"Bitgaming.cl"<enviar-bitgaming@marysstyle.cl>',
            to: [destinatario1, destinatario2].join(','),
            subject: `Confirmación de recepción de formulario #${numeroAleatorio}`,
            html: emailHTML,  // Asegúrate de tener definida la variable emailHTML
           
          };

          // Envío del correo electrónico al usuario
          transporter.sendMail(mailOptions2, (error, info) => {
            if (error) {
              console.log(error);
              res.send('Error al enviar el correo electrónico.');
            } else {
              console.log('Correo electrónico enviado: ' + info.response);
              res.send('Formulario enviado correctamente.');
            }
          });


        }
      });
    }
);


const emailHTML = `
  <!-- ... Contenido del email HTML ... -->
`;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/RegistroCs2.html');
});


app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});