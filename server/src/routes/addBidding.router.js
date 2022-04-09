const { Router } = require('express');
const addBiddingController = require('../controllers/addBidding.controller');
const checkAuth = require('../middlewares/checkAuth');

const addBiddingRouter = Router();

// addBiddingRouter.get('/', checkAuth, addBiddingController.addBidding);
addBiddingRouter.post('/', addBiddingController.addBidding);

module.exports = addBiddingRouter;
