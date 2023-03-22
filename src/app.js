const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");

const start = require("./intents/start_intent");
const mobileBundy = require("./intents/mobile_bundy_intent");
const geotag = require("./intents/geotag_intent");

const app = express();

app.post("/chatbot", express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });
  const payload = agent.originalRequest.payload;

  if (payload["firstName"] != undefined) {
    global.firstName = payload["firstName"];
  }

  let intentMap = new Map();
  intentMap.set("start", start.default);
  intentMap.set("start-fallback", start.fallback);

  intentMap.set("mobile_bundy", mobileBundy.default);
  intentMap.set("mobile_bundy_works_yes", mobileBundy.worksYes);
  intentMap.set("mobile_bundy_fallback", mobileBundy.fallback);

  intentMap.set("geotag", geotag.default);

  agent.handleRequest(intentMap);
});

app.listen(process.env.PORT || 8080);
