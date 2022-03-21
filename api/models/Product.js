const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true,index: true},
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true,default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
