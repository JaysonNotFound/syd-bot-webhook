const { Image, Suggestion, Card } = require("dialogflow-fulfillment");

function intentHandler(agent) {
  agent.add("Geotag");
}

module.exports = {
  default: intentHandler,
};
