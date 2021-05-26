import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import routes from "./routes";
// import logger from "./util/logger";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const server = express();

// dotenv.config();

// server.use(routes);

// //Middlewares
// server.use(bodyParser.json());

// server.listen(process.env.PORT, () => {
//   logger.info(`Listening on port${process.env.PORT}`);
// });
