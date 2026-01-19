const express = require('express');
const router = express.Router();
const { transfer } = require('../service/transferService');

router.post('/transfer', (req, res) => {
  const result = transfer(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json({ message: 'Transferência realizada' });
});

module.exports = router;
