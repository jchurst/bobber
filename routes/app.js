const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.render('index.html'));
router.get('/all', (req, res) => {

module.exports = router;