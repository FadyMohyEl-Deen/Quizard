import mongoose from "mongoose";

export async function connect() {
  if (!process.env.MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1);
  }
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB is connected successfully");
    });
    connection.on("error", (error) => {
      console.log(
        "mongoDB connection error, please make sure mongoDB is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
