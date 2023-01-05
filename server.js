const dotenv = require("dotenv");
const mongoose = require('mongoose');
const app = require('./app'); 

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("Db connection Successfull!"));



  

const port = 8800;
app.listen(port, () => {
  console.log(`server is listening at ${port} ....`);
});
