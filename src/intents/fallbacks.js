const { Text, Suggestion } = require("dialogflow-fulfillment");

function minimalYesNoFallback(agent) {
  const responses = [
    new Text("Sorry, what was that?"),
    new Text("Can you please say it again?"),
    new Text("What did you say?"),
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  const randomResponse = responses[randomIndex];
  agent.add([randomResponse, new Suggestion("Yes"), new Suggestion("No")]);
}

module.exports = {
  minimalYesNoFallback: minimalYesNoFallback,
};
