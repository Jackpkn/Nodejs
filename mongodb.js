import mongoose from "mongoose";
require("dotenv").config();
import assert from "assert";

const db = mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    assert.equal(error, null, "db connect fail ...");
    console.log("DB Connect succuss");
  }
);
