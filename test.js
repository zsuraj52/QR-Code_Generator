// const fs = require('fs');
import express from 'express';
// const router = express.Router()
import { toDataURL } from 'qrcode';
const app = express();
const log = console.log;
app.get('/qr', (req, res) => {
    toDataURL('curl https://www.example.com/').then(url => {
      console.log("QR-Code : ", url);
      res.send({ url : url })
    }).catch(err => {
        console.debug(err)
    })
  
    // QRCode.toFile('qr.png', 'www.google.com', {
    //   color: {
    //     dark: '#000',
    //     light: '#fff'
    //   }
    // }, function (err) {
    //   if (err) throw err
    //   res.send("QR Generated !")
    // })
  
    // QRCode.toString('http://www.google.comhttps://www.thinkitive.com/company/career-tech&engg.html', function (err, string) {
    //   if (err) throw err
    //   console.log(string)
    //   res.send(string)
    // })
});

app.listen(3000, () => {
    console.log("Listening");
})