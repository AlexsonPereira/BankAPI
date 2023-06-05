import mongoose from "mongoose";

const TransferSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  value: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
});

const Transfer = mongoose.model("Transfer", TransferSchema);

export { Transfer };
