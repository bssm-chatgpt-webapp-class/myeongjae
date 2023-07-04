const express = require("express");
const router = express.Router();
const Connection = require("../models/connector");
const { Configuration, OpenAIApi } = require("openai");

Connection.linkConnection();
// RDB    : 제약
// NoSQL  ; 쉬움, 조회성능 좋음
router.post("", async function (req, res) {
  const question = req.body.text;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    return res.json(response.data.choices[0].message);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
