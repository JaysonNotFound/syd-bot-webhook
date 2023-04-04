const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");

const greeting = require("./intents/greeting_intent");
const topicsSuggest = require("./intents/topic_suggest_intent");
const aboutFeatures = require("./intents/about_features_intent");
const aboutFeaturesSuggest = require("./intents/about_features_suggest_intent");

const clock = require("./intents/clock_intent");

const aboutFeaturesMobileBundy = require("./intents/about_features_mobile_bundy_intent");
const aboutFeaturesGeotag = require("./intents/about_features_geotag_intent");
const aboutFeaturesGeofence = require("./intents/about_features_geofence_intent");
const aboutFeaturesInstacash = require("./intents/about_features_instacash_intent");
const aboutFeaturesMyRequest = require("./intents/about_features_my_requests_intent");

const app = express();

app.post("/chatbot", express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });
  const payload = agent.originalRequest.payload;

  if (payload["firstName"] != undefined) {
    global.firstName = payload["firstName"];
  }

  let intentMap = new Map();
  intentMap.set("greeting", greeting.default);
  intentMap.set("greeting-fallback", greeting.fallback);
  intentMap.set("topic.suggest-yes", topicsSuggest.yes);
  intentMap.set("topic.suggest-no", topicsSuggest.no);

  intentMap.set("about.features", aboutFeatures.default);
  intentMap.set(
    "about.features.suggest-fallback",
    aboutFeatures.suggestFallback
  );
  intentMap.set("about.features.suggest-yes", aboutFeaturesSuggest.yes);
  intentMap.set("about.features.suggest-no", aboutFeaturesSuggest.no);

  intentMap.set(
    "about.features.mobile_bundy",
    aboutFeaturesMobileBundy.default
  );
  intentMap.set(
    "about.features.mobile_bundy-fallback",
    aboutFeaturesMobileBundy.fallback
  );

  intentMap.set("about.features.geotag", aboutFeaturesGeotag.default);
  intentMap.set("about.features.geotag-fallback", aboutFeaturesGeotag.fallback);

  intentMap.set("about.features.geofence", aboutFeaturesGeofence.default);
  intentMap.set(
    "about.features.geofence-fallback",
    aboutFeaturesGeofence.fallback
  );

  intentMap.set("about.features.instacash", aboutFeaturesInstacash.default);
  intentMap.set(
    "about.features.instacash-fallback",
    aboutFeaturesInstacash.fallback
  );

  intentMap.set("about.features.my_requests", aboutFeaturesMyRequest.default);
  intentMap.set(
    "about.features.my_requests-fallback",
    aboutFeaturesMyRequest.fallback
  );

  intentMap.set("clocking", clock.default);
  intentMap.set("clock-in", clock.clockIn);
  intentMap.set("clock-out", clock.clockOut);

  agent.handleRequest(intentMap);
});

app.listen(process.env.PORT || 8080);
