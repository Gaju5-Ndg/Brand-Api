// import swaggerUi from "swagger-ui-express";
// import swaggerOptions from "./swagger.js";
// import express from "express";
// import mongoConnect from "./config/db.config.js";
// import userRouter from "./routes/user.js";
// import postRouter from "./routes/blog.js";
// import messageRoutes from "./routes/messages.js";
// import commentRouter from "./routes/comments.js";

// const app = express();

// app.use(express.json());
// const PORT = process.env.PORT || 3000;

// app.use("/api/users", userRouter);

// app.use("/api/post", postRouter);
// app.use("/api/message", messageRoutes);
// app.use("/api/comment", commentRouter);
// app.use("/api/port", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
// app.use("/", (req, res) => {
//   res.send("<h1>Welcome to the API</h1>");
// });

// app.listen(PORT, () => {
//   console.log(`Server Started at ${PORT}`);
// });

// mongoConnect();

// export default app;
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger.js";
import cors from "cors";
import express from "express";
import mongoConnect from "./config/db.config.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/blog.js";
import messageRoutes from "./routes/messages.js";
import commentRouter from "./routes/comments.js";


const PORT = process.env.PORT || 3000;
mongoConnect();

const app = express();
app.use(cors());

app.use(express.json());


app.use("/api/users", userRouter);

app.use("/api/post", postRouter);
app.use("/api/message", messageRoutes);
app.use("/api/comment", commentRouter);
app.use("api/docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
//app.use("/api/port", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
//.use("/", (req, res) => {
 // res.send("<h1>Welcome to the API</h1>");
//});


app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

mongoConnect();

export default app;
