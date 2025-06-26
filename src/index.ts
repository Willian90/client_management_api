import app from "./app";
import { AppDataSource } from "./config/database";

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("conecting to the database");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log("Listening in the port " + port));
};

main();
