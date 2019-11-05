const express = require("express");
const bparser = require("body-parser");

const {useCORS} = require("./middleware/cors");

const feedRoute = require("./routes/feed-route");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bparser.json());

app.use(useCORS);

app.use("/feed", feedRoute);

app.listen(PORT, () => console.log("Server started!"));
