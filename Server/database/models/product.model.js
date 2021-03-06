const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = schema({
    image: { type: String, required: true },
    name: { type: String, required: true, validate: {validator:(name) => { name !== null }} },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    stock: { type: Number, required: true },
    shop_id: { type: schema.Types.ObjectId, ref: 'shops', required: false }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;