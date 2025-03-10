var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generate', (req, res) => {
    const { length, includeNumbers, includeSymbols } = req.body;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-={}|;:,.<>?';

    let characters = letters;
    characters += numbers;
    characters += symbols;
    characters += lettersUpper;

    let password = '';
    for (let i = 0; i < 13; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    res.json({ password });
});

module.exports = router;
