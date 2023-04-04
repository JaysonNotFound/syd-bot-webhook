const {
  Text,
  Suggestion,
  // Payload
} = require("dialogflow-fulfillment");
function intentHandler(agent) {
  agent.add([
    new Text("What do you want to do?"),
    new Suggestion("Clock In"),
    new Suggestion("Clock Out"),
  ]);
}

function clockInHandler(agent) {
  agent.add("ClockIN");
}

function clockOutHandler(agent) {
  agent.add("ClockOUT");
}

module.exports = {
  default: intentHandler,
  clockIn: clockInHandler,
  clockOut: clockOutHandler,
};
