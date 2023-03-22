const { Image, Suggestion, Card } = require("dialogflow-fulfillment");

function intentHandler(agent) {
  agent.add("Geofence");
}

module.exports = {
  default: intentHandler,
};
