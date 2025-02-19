import express from "express";
import cors from "cors";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
