const { Text } = require("dialogflow-fulfillment");
const { minimalYesNoFallback } = require("./fallbacks");

function intentHandler(agent) {
  agent.add(new Text("My Requests is . . ."));
}
function fallbackIntentHandler(agent) {
  minimalYesNoFallback(agent);
}

module.exports = {
  default: intentHandler,
  fallback: fallbackIntentHandler,
};
