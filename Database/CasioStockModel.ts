import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    casio: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    }
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;