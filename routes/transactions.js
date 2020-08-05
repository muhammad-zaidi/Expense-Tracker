const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/trsnsactionController');

router.route('/').get(getTransactions).post(addTransactions);
router.route('/:id').delete(deleteTransactions);

module.exports = router;
