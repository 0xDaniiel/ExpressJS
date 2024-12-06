import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

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

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));
//To get the about page, just add /abouthtml to the url

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get single post via id
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Find the post with the given id
  const post = posts.find((post) => post.id === id);

  if (post) {
    // Return the post if found
    res.json(post);
  } else {
    // Return error if post is not found
    res.status(404).json({ error: "Post not found" });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
