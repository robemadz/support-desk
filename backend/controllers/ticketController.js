const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

//@description Get user tickets
//@route GET api/tickets
//@access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

//@description Create new ticket
//@route POST api/tickets/
//@access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' });
});

module.exports = {
  getTickets,
  createTicket,
};
