const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// database user:
// username: yashsis2204
// passwd: DHSdg8Lsq1LsNUN3;

require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://thebookstop.vercel.app/', 'https://thebookstop.onrender.com'],
    credentials: true
}))

//routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.use("/", (req, res) => {
    res.send("Book server running");
  });
}

main()
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
