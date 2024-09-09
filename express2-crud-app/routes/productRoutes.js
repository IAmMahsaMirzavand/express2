const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controllers/productController');


// router.get('/', getAllProducts);


// router.get('/:id', getProductById);


// router.post('/', createProduct);


// router.patch('/:id', updateProduct);


// router.delete('/:id', deleteProduct);

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProductById).patch(updateProduct).delete(deleteProduct)
module.exports = router;