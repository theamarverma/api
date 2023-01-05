const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name:{
      type : String,
      unique: true,
      required: [true,'A tour must have a name'],
      trim:true
      },
      
      
    ratingsAverage:{
      type : Number,
      default: 4.5
    },
    
    ratingsQuantity: {
    type: Number,
    default: 0
    },
    
    
    durations: { 
    type: Number,
    required: [true, 'A tour must have a duration']},
    
    
    maxGroupSize: {
    type: Number,
    required: [true, ' A tour must have group size']},
    
    
    difficulty: {
    type: String,
    required: [ true, ' A tour must have difficulty'] },
    
    
    price:{
      type: Number,
      required:[true,'A tour must have a price']},
    
    priceDiscount: Number,
    summary : {
    type: String,
    trim: true,
    required: [ true, ' A tour must have description']
    },
    
    
    description: {
    type: Number,
    trim: true},
    
    
    imageCover: {
    type: String,
    required: [true, ' A tour must have a cover image']},
    
    image: [String],
    requestedAt: {
    type: Date, 
    default: Date.now() 
    },
    
    
  });
 //===============================================================================================================>>   
  const Tour = mongoose.model('Tour', tourSchema);
  
  
  module.exports = Tour;