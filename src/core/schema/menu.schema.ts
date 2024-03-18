import { Schema } from "mongoose";
const MenuSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    restaurantID:{ type: Schema.Types.ObjectId, ref: 'Restaurant' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});