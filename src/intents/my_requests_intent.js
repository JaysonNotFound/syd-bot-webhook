const { Image, Suggestion, Card } = require("dialogflow-fulfillment");

function intentHandler(agent) {
  agent.add("My Requests");
}

module.exports = {
  default: intentHandler,
};
