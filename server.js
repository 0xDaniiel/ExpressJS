//Entry point
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

let port = 8000;
/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let port = 8000; 
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "/about.html"));
  });
  */

//USING THE EXPRESS STATIC MIDDLEWARE
app.use(express.static(path.join(__dirname, "public", "/about.html")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
