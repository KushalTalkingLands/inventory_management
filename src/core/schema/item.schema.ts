import { Schema } from "mongoose";
const ItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    availability: { type: Boolean, default: true },
    image: { type: String, required: true }
});