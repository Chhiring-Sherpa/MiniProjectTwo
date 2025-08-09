import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,           // e.g. "Sunset Over Mountains"
      trim: true,
    },
    genre: {
      type: String,
      required: true,           // e.g. "Landscape", "Portrait", "Macro", "Street"
      trim: true,
    },
    price: {
      type: Number,
      required: true,           // licensing fee or print price
      min: 0,
    },
    availableCopies: {
      type: Number,
      default: 0,               // number of prints or licenses available
      min: 0,
    },
    details: {
      type: String,             // camera settings, location, story behind the shot
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;

