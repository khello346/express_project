import express from "express";
import bodyParser from "body-parser";
import userRoute from "./src/user/user.route.js"; 
const app = express();
const { json, urlencoded } = bodyParser; //yaane bi aleb l bodyparser fi json w urlencded

app.use(urlencoded({ extended: false })); //daroure nekteba  cha8leta bas teje request yhawela la json
app.use(json()); // anyone mabi hemne chou label eza bas bede wehde bhotelo .get .push ... eza bedde ekhid kel chi bhotello .use


app.use("/user", userRoute);
// req res request response next
//middlewer function next w bas eb3at response kermel otla3 men
// app.use("*", (req, res, next) => {
//   console.log("i received the request : ");
//   next();
// });

// app.get("*", (req, res, next) => {
//   res.status(200).json({ message: "i entered a get API" });
// });

// app.get("/user", (req, res, next) => {
//   res
//     .status(200)
//     .json({ message: "i entered onlu get API for the user only!!" });
// });

// app.post("*", (req, res, next) => {
//   res.status(200).json({ message: "i entered a post API" });
// });

// app.put("*", (req, res, next) => {
//   res.status(200).json({ message: "i entered a put API" });
// });

app.use("*", (req, res, next) => {
  res.status(404).json({ message: "npo path found" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
}); // 3am nesta3mol express fia function btekhod 2 params
