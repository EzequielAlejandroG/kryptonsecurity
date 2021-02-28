const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'KRYPTON SECURITY' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});

module.exports = router;
