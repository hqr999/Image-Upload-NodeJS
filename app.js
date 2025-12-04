require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const arquivoUpload = require('express-fileupload')




// database
const connectDB = require('./db/connect');


// Roteadores Produto 
const prod_roteador = require('./routes/productRoutes')



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const fileUpload = require('express-fileupload');


app.use(express.static('./public'))
app.use(express.json())
app.use(arquivoUpload())

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

app.use('/api/v1/produtos',prod_roteador)

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
