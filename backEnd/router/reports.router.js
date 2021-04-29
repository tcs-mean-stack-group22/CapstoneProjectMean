const express = require('express');
const router = express.Router();

const { getreportsByDates } = require('../controller/reports.controller');

router.post('/reportByDate', getreportsByDates);

module.exports = router;
