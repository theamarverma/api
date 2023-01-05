const express = require('express');
const tourController = require ('../controllers/tourController');

const router = express.Router();
//===============================================================================================================>>
//For define parameter functions in middleware for applications 
// router.param('id', tourController.checkID);

//===============================================================================================================>>

router  
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);
router.route('/:id').get(tourController.getTour).patch(tourController.updateTour);
router.route('/:id').get(tourController.getTour).delete(tourController.deleteTour);

module.exports = router;