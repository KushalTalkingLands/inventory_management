import { Schema } from "mongoose";
const OrderSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    totalPrice: { type: Number, required: true },
    customer: {
        name: String,
        email: String,
        phone: String
    },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});