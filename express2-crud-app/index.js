require('dotenv').config(); 
const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000; 



const productRoutes = require('./routes/productRoutes');
const loggerMiddleware = require('./middleware/loggerMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


app.use(loggerMiddleware);


app.use('/product', productRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});