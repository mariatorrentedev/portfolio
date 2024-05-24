import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { PORT, NODE_ENV } from "./config";
import router from "./routes/test";

// The minimal output for production, Standard Apache for dev.
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

const app = express();

app.use(express.json());
// Logger middleware.
app.use(morgan(morganOption));
// Set HTTP response headers.
app.use(helmet());

// Routes
app.use("/api/test", router);

app.get("/", (_, res) => {
  res.send("This is my potfolio!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
