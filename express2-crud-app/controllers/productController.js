let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];
  
  const getAllProducts = (req, res) => {
    res.json(products);
  };
  
  const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
  
    if (product) {
      res.json(product);
      return;
    } else {
      res.status(404).send('Product not found');
    }
  };
  
  const createProduct = (req, res) => {
    const newProduct = req.body;
    const newId = products.length + 1;
    newProduct.id = newId;
    products.push(newProduct);
    console.log(products);
    res.status(201).json(newProduct);
  };
  
  const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
  
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...req.body };
      res.json(products[productIndex]);
    } else {
      res.status(404).send('Product not found');
    }
  };
  
  const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
  
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).send('Product not found');
    }
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };