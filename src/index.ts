import express from "express";
import scenarioRoute from "./routes/scenario";

const app = express();
app.use(express.json());

app.use("/api/scenario", scenarioRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
