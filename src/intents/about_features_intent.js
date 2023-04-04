const { Text, Suggestion } = require("dialogflow-fulfillment");
const { aboutFeatures } = require("./suggestions");

function intentHandler(agent) {
  agent.context.delete("greeting_fallback");
  agent.context.delete("topic_suggest");
  agent.add([
    new Text("Hello! here is the available feature of Sprout Mobile."),
    new Text(
      "Please choose from suggestions or describe your concern in few words."
    ),
    ...aboutFeatures(),
  ]);
}

function suggestFallbackIntentHandler(agent) {
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
  suggestFallback: suggestFallbackIntentHandler,
};
