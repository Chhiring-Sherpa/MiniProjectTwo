import Photo from "../models/photo.js";

export const createPhoto = async (req, res) => {
  try {
    const { title, genre, price, availableCopies, details } = req.body;

    const newPhoto = await Photo.create({
      title,
      genre,
      price,
      availableCopies,
      details,
    });

    res.status(201).json({
      success: true,
      data: newPhoto,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
