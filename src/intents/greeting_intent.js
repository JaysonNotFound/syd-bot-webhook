const { Text, Suggestion } = require("dialogflow-fulfillment");
const { topics } = require("./suggestions");

function intentHandler(agent) {
  agent.add(
    new Text("Hi! I'm Syd, I can respond to your question about Sprout Mobile.")
  );
  agent.add([
    new Text(
      "To help you better, please choose from suggestions or describe your concern in few words."
    ),
    ...topics(),
  ]);
}

function fallbackIntentHandler(agent) {
  agent.add([
    new Text(
      "I can help you faster if you choose an option from suggestions. Is you option available in the choices above?"
    ),
    new Suggestion("Yes"),
    new Suggestion("No"),
  ]);
}

module.exports = {
  default: intentHandler,
  fallback: fallbackIntentHandler,
};
