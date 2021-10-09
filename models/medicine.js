const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema(
  {
    medicineName: { type: String, required: true },
    Price: { type: Number, required: true },
    unitInStock: { type: Number, required: true },
    Avaliable: { type: Boolean, required: true },
    stockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
