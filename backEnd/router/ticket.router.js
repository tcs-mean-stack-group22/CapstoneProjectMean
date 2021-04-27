let express = require('express');
let router = express.Router(); //router reference.
let { getTicketDetails, postTicketDetails } = require('../controller/ticket.controller');

router.get('/allTicketDetails', getTicketDetails);
router.post('/addTicket', postTicketDetails);

module.exports = router;
