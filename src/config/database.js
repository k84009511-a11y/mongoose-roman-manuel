import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const startDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);

    console.log("Se conectó a la base de datos correctamente");
  } catch (error) {
    console.log("No se pudo conectar con la base de datos", error);
  }
};
