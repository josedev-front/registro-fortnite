const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.static('public'));




app.post('/enviar', upload.none(), (req, res) => {
      // Datos personales
      const nombre = req.body.nombre;
      const apellido = req.body.apellido;
      const correo = req.body.correo;
      const telefono = req.body.telefono;
      const nickname = req.body.nickname;
      const pais = req.body.pais;
      const epicuser = req.body.epicuser;
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

const emailHTML = `
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
            h1{ font-size: 30px !important;}
            h2{ font-size: 25px !important;}
            h3{ font-size: 18px !important;}
            h4{ font-size: 16px !important;}
            p, a{font-size: 15px !important;}
            .claseBoton{
                width: 30%;
                    background-color: #fcae3b;
                    border: 2px solid #fcae3b;
                    color: black; 
                    padding: 16px 32px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
            }
            .claseBoton:hover{
                background-color: #000000;
                color: #ffffff;
            }
            .imag{
                width: 20px;
                height: 20px;
            }
            .contA{
                margin: 0px 5px 0 5px;
            }
            .afooter{
                color: #ffffff !important; 
                text-decoration: none;
                font-size: 13px !important;
            }
            .marco {
              display: block;
              border-radius: 10px;
              box-shadow: 2px 2px 2px 2px #6e95b9;
              width: 10%;
              margin: auto;
              padding: 10px;
              }
  
        </style>
    </head>
    <body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px;">
                <!-- Imagen inicial -->
                <div style="background-color: #212529; padding: 10px 0px 10px 0px; width: 100%; text-align: left;">
                    <img src="public/iconoprincipal.webp" alt="" style="width: 70px; height: 70px; padding: 5px;">
                </div>
                <!-- Imagen inicial -->
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h1>¡Hemos recibido tu compra! ✅</h1>
                  <p style="text-align: left; padding: 5px;">Estimado <strong>${nombre} ${apellido}</strong>,</p>
                  <p style="text-align: left; padding: 5px;">Es un gusto saludarte. Mediante este correo electrónico, te confirmamos la recepción de tu compra con el número de referencia <strong>${numeroAleatorio}</strong>. Agradecemos tu interés en nuestros servicios.</p>
                  <p style="text-align: left; padding: 5px;">En breve seras contactado por un moderador que se encargara de unirte a la partida.</p>  
                    <div class="marco">
                       <p style="text-align: center;">Fecha de partida: xx/xx/xx.</p>
                       <p style="text-align: center">Hora de la partida: xx:xx</p>
                       <p style="text-align: center;"></p>
                     </div>
                    <!-- Gracias -->
                    <p>Saludos cordiales,</p>
                <!-- Contenido principal -->
                <!-- Footer -->
                <div style="background-color: #212529; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                    <!-- Redes sociales -->
                    <a href="https://www.facebook.com/pretwor" class="contA"><img src="cid:facebook.png" class="imag" /></a>
                    <a href="https://www.instagram.com/pretwor/" class="contA"><img src="cid:instagram.png" class="imag" /></a>
                    <a href="https://wa.me/573224294332" class="contA"><img src="cid:whatsapp.png" class="imag" /></a>
                    <a href="mailto:contacto@pretwor.com" class="contA"><img src="cid:correo-electronico.png" class="imag" /></a>
                    <!-- Redes sociales -->
                    <h4>Soporte</h4>
                    <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                        Comunícate con nosotros por los siguientes medios:<br>
                        Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a><br>
                        Whatsapp: <a class="afooter" href="https://wa.me/573224294332">+57 322 429 4332</a><br>
                    </p>
                    <p style="background-color: #1d2125; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                        © 2023 Bitgaming.cl, todos los derechos reservados.
                    </p>
                </div>
                <!-- Footer -->
            </div>
        </div>
    </body>
    </html>`;
  
    const email2HTML = `
<html>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
          .claseBoton{
              width: 30%;
                  background-color: #fcae3b;
                  border: 2px solid #fcae3b;
                  color: black; 
                  padding: 16px 32px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
          }
          .claseBoton:hover{
              background-color: #000000;
              color: #ffffff;
          }
          .imag{
              width: 20px;
              height: 20px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
          .marco {
            display: block;
            border-radius: 10px;
            box-shadow: 2px 2px 2px 2px #6e95b9;
            margin: auto;
            padding: 10px;
            }

      </style>
  </head>
  <body>
      <div style="width: 100%; background-color: #e3e3e3;">
          <div style="padding: 20px 10px 20px 10px;">
              <!-- Imagen inicial -->
              <div style="background-color: #212529; padding: 10px 0px 10px 0px; width: 100%; text-align: left;">
                  <img src="public/iconoprincipal.webp" alt="" style="width: 70px; height: 70px; padding: 5px;">
              </div>
              <!-- Imagen inicial -->
              <!-- Contenido principal -->
              <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                <h1>¡cliente ha realizado la compra del servicio! ✅</h1>
                <div class="marco">
                <ul>
                <li><p style="text-align: center;">${numeroAleatorio}</p></li>
                <li><p style="text-align: center;">Fecha de partida: xx/xx/xx.</p></li>
                <li><p style="text-align: center">Hora de la partida: xx:xx</p></li>
                <li> <p style="text-align: center;">Nombre: ${nombre}</p></li>
                <li><p style="text-align: center;">Apellido: ${apellido}</p></li>
                <li><p style="text-align: center;">Correo: ${correo}</p></li>
                <li><p style="text-align: center;">Telefono: ${telefono}</p></li>
                <li><p style="text-align: center;">Nickname: ${nickname}</p></li>
                <li><p style="text-align: center;">Pais: ${pais}</p></li>
                <li><p style="text-align: center;">Username de Epic: ${epicuser}</p></li>
                <li><p style="text-align: center;">Juego: Fortnite</p></li>
                </ul>
               </div>
                  <!-- Gracias -->
                  <p>Saludos cordiales,</p>
              <!-- Contenido principal -->
              <!-- Footer -->
              <div style="background-color: #212529; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                  <!-- Redes sociales -->
                  <a href="https://www.facebook.com/pretwor" class="contA"><img src="cid:facebook.png" class="imag" /></a>
                  <a href="https://www.instagram.com/pretwor/" class="contA"><img src="cid:instagram.png" class="imag" /></a>
                  <a href="https://wa.me/573224294332" class="contA"><img src="cid:whatsapp.png" class="imag" /></a>
                  <a href="mailto:contacto@pretwor.com" class="contA"><img src="cid:correo-electronico.png" class="imag" /></a>
                  <!-- Redes sociales -->
                  <h4>Soporte</h4>
                  <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                      Comunícate con nosotros por los siguientes medios:<br>
                      Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a><br>
                      Whatsapp: <a class="afooter" href="https://wa.me/573224294332">+57 322 429 4332</a><br>
                  </p>
                  <p style="background-color: #1d2125; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                      © 2023 Bitgaming.cl, todos los derechos reservados.
                  </p>
              </div>
              <!-- Footer -->
          </div>
      </div>
  </body>
  </html>`;
    


// Configuración del correo electrónico al correo del hosting
const mailOptions = {
  from: 'enviar-bitgaming@marysstyle.cl',
  to: destinatario1,
  subject: `Confirmación de recepción de formulario #${numeroAleatorio}`,
  html: email2HTML,
  attachments: [
    { filename: 'iconoprincipal.webp', path: 'public/iconoprincipal.webp',cid:'iconoprincipal.webp'}
      ]
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
      to: [destinatario2].join(','),
      subject: `Confirmación de recepción de formulario #${numeroAleatorio}`,
      html: emailHTML,
      attachments: [
        { filename: 'iconoprincipal.webp', path: 'public/iconoprincipal.webp',cid:'iconoprincipal.webp'},
          ]
    };
      
    /*  `Estimado ${nombre} ${apellido},\n\nEs un gusto saludarte. Mediante este correo electrónico, te confirmamos la recepción de tu formulario con el número de referencia ${numeroAleatorio}. Agradecemos tu interés en nuestros servicios.
      \n${nombre}
      \n${apellido}
      \n${correo}
      \n${telefono}
      \n${nickname}
      \n${pais}
      \n${steamuser}` */ // Asegúrate de tener definida la variable emailHTML
     
    
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

    });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/RegistroFortnite.html');
});


app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});