const { Text, Suggestion } = require("dialogflow-fulfillment");

function intentHandler(agent) {
  agent.add([
    new Text("Good day! How can I help you?"),
    new Suggestion("Mobile Bundy"),
    new Suggestion("Geotag"),
    new Suggestion("Geofence"),
    new Suggestion("My Requests"),
    new Suggestion("Instacash"),
  ]);
}

function fallbackHandler(agent) {
  agent.add([
    new Text(
      "Sorry, I can't find that feature, you can choose from the suggestion so I help you faster."
    ),
    new Suggestion("Mobile Bundy"),
    new Suggestion("Geotag"),
    new Suggestion("Geofence"),
    new Suggestion("My Requests"),
    new Suggestion("Instacash"),
  ]);
}

module.exports = {
  default: intentHandler,
  fallback: fallbackHandler,
};
