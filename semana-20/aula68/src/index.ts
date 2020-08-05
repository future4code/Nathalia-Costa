import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { userProfile } from "./endpoints/userProfile";
import { newRecipe } from "./endpoints/newRecipe";
import { getRecipe } from "./endpoints/getRecipe";
import { follow } from "./endpoints/follow";
import { feed } from "./endpoints/feed";
import { getFollowing } from "./endpoints/getFollowing";
import { unfollow } from "./endpoints/unfollow";

dotenv.config();

export const app = express();

app.use(express.json());
app.post("/signup", signUp);
app.post("/login", login);
app.get("/user/profile", userProfile);
app.post("/recipe", newRecipe);
app.get("/recipe/:id", getRecipe);
app.post("/user/follow", follow);
app.get("/user/feed", feed);
app.get("/user/followers", getFollowing);
app.post("/user/unfollow", unfollow);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
