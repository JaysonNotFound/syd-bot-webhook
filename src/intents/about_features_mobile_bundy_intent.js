const { Text, Image, Suggestion } = require("dialogflow-fulfillment");
const { minimalYesNoFallback } = require("./fallbacks");
function intentHandler(agent) {
  agent.add([
    new Text(
      "Mobile Bundy is a counterpart of Web Bundy on the Sprout HR web application where users can clock in and out even if not activated for Geotag or Geofence setup."
    ),
    new Text("How does it work?"),
    new Text(
      "The Mobile Bundy is a new feature on the Sprout Mobile app and this will only work if the Geotag/Geofence setup is not activated."
    ),
    new Image(
      "https://sprout.zendesk.com/hc/article_attachments/900008528106/image-0.png"
    ),
    new Text(
      "To clock in or out, go to your Home Screen and click Clock In or Out. You can also clock in and out via the CIAO alerts (which have to be enabled to work) that you get on your notifications area when your shift starts and ends."
    ),
  ]);

  agent.add([
    new Text("Do you want to know other features of Sprout Mobile?"),
    new Suggestion("Yes"),
    new Suggestion("No"),
  ]);
}

function fallbackIntentHandler(agent) {
  minimalYesNoFallback(agent);
}

module.exports = {
  default: intentHandler,
  fallback: fallbackIntentHandler,
};
