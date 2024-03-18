import { Schema } from "mongoose";
export const InventorySchema = new Schema({
    type: { type: String },
    properties: {
        pname: { type: String },
        status: { type: String },
        area_unit: { type: String },
        area: { type: Number },
        price: { type: Number },
        facing: { type: [String] },
    },
    geometry: {
        type: { type: String },
        coordinates: { type: [[[[Number]]]] }
    },
});