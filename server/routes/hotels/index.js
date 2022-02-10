const express = require('express');
const router = express.Router();
const { getHotels, postHotels, getAHotel,gethoteels} = require("../../controllers/hotels");
const userAuth = require('../../middlewares/userAuth');
router.get('/', getHotels);
router.post('/post', postHotels)
router.get('/:id', getAHotel)
router.get('/search', gethoteels)

module.exports = router;