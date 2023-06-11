var express = require('express');
var router = express.Router();
var QRCode = require('qrcode')

// GET home page api
router.get('/', function(req, res, next) {
    res.json({ title: 'aliOS Tools API' });
    }
);

router.get('/create-qr-code/', (req, res) => {
    const size = req.query.size;
    const data = req.query.data;
  
    QRCode.toBuffer(data, { errorCorrectionLevel: 'H', width: size.split('x')[0] }, function (err, buffer) {
        res.type('png')
        res.send(buffer)
    });
  });

module.exports = router;