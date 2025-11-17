import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("Erro: MONGO_URI não encontrada no .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
    process.exit(1);
  }
};
