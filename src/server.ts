import express from "express";

import { router } from "./routes";

const app = express();

app.listen(3333, () => console.log("Server is running"));
app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World!!!",
  });
});
