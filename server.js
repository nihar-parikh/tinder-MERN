import express from "express";
//import("./mongoose.js");
import mongoose from "mongoose";
import cards from "./card-model.js";
//import Cors from "cors";

const app = express();

const port = process.env.PORT || 8001;

const mongodb_url =
  "mongodb+srv://admin:riekY46VMB71HiHz@cluster0.3n6r9.mongodb.net/tinder-api?retryWrites=true&w=majority";

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  autoIndex: true,
  useUnifiedTopology: true,
});

//middleware
app.use(express.json());
//app.use(Cors()); //npm Cors is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

app.get("/", (req, res) => {
  res.status(200).send("krishna");
});

// app.post("/tinder/cards", async (req, res) => {
//   try {
//     const card = new cards(req.body);
//     await card.save();
//     res.status(201).send(card);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  //console.log(dbCard);
  cards.create(dbCard, (error, data) => {
    if (error) {
      //console.log(error);
      res.status(500).send(error);
    } else {
      //console.log(data);
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

// app.get("/tinder/cards", async (req, res) => {
//   try {
//     const card = await cards.find({});
//     res.status(201).send(card);
//   } catch (e) {
//     res.status(404).send(e);
//   }
// });

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
