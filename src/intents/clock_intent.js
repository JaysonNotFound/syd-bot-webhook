const { Text, Suggestion, Payload } = require("dialogflow-fulfillment");
function intentHandler(agent) {
  agent.add([
    new Text("What do you want to do?"),
    new Suggestion("Clock In"),
    new Suggestion("Clock Out"),
  ]);
}

function clockInHandler(agent) {
  agent.add([
    new Text("Are you sure you want to clock in?"),
    new Suggestion("Yes"),
    new Suggestion("No"),
  ]);
}

function clockInYesHandler(agent) {
  agent.add("Clocking in...");
  agent.add(
    new Payload(
      agent.UNSPECIFIED,
      {
        action: "clock_in",
      },
      {
        rawPayload: true,
        sendAsMessage: true,
      }
    )
  );
}

function clockOutHandler(agent) {
  agent.add([
    new Text("Are you sure you want to clock out?"),
    new Suggestion("Yes"),
    new Suggestion("No"),
  ]);
}

function clockOutYesHandler(agent) {
  agent.add("Clocking out...");
  agent.add(
    new Payload(
      agent.UNSPECIFIED,
      {
        action: "clock_out",
      },
      {
        rawPayload: true,
        sendAsMessage: true,
      }
    )
  );
}

module.exports = {
  default: intentHandler,
  clockIn: clockInHandler,
  clockInYes: clockInYesHandler,
  clockOut: clockOutHandler,
  clockOutYes: clockOutYesHandler,
};
