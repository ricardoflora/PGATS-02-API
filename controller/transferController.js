const transferService = require('../service/transferService');

exports.transfer = (req, res) => {
  try {
    const transfer = transferService.transfer(req.body);
    res.status(201).json(transfer);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getTransfers = (req, res) => {
  res.json(transferService.getTransfers());
};