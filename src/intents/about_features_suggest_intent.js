const { Text } = require("dialogflow-fulfillment");
const { aboutFeatures } = require("./suggestions");

function yesIntentHandler(agent) {
  agent.add([...aboutFeatures()]);
}

function noIntentHandler(agent) {
  agent.add(new Text("Ok, let me know if you questions. Thanks"));
}

module.exports = {
  yes: yesIntentHandler,
  no: noIntentHandler,
};
