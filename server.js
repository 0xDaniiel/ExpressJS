import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT;

/*
// This is required for using __dirname in ES module format
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));
//To get the about page, just add /abouthtml to the url
*/

let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the third post.",
  },
];

// Json api
app.get("/api/posts", (req, res) => {
  res.json(posts);
});
// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
