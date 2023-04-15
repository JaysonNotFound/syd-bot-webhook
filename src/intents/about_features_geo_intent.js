const { Text, Image, Suggestion } = require("dialogflow-fulfillment");
const { minimalYesNoFallback } = require("./fallbacks");

function intentHandler(agent) {
  agent.add([
    new Text(
      "Sprout Mobile is capable of two different clocking features, namely Geotag and Geofence, which are set up per department under the company on Sprout HR. Though please note that only one clocking feature can be enabled per department (for example Department A on Geotag and Department B on Geofence)."
    ),
    new Text(
      "But what is the difference between these two clocking features anyway?"
    ),
    new Text(
      "Well, it's simple really. With geotag, employees can clock-in or clock-out anywhere at any time.  Their location will be shown in the Location Name Bar (as shown below) prior to creating their logs to ensure that the correct location will reflect."
    ),
    new Image(
      "https://sprout.zendesk.com/hc/article_attachments/360090927994/clock_in_geotag.jpg"
    ),
    new Text(
      'With the geofence, it gets a little tricky. If this is enabled for their department, the employees can only clock-in or clock-out within a certain location and radius. As such, if the pin is not within the "fence", they would not be able to clock-in/clock-out.'
    ),
    new Image(
      "https://sprout.zendesk.com/hc/article_attachments/360090928034/2020-09-23_16_20_30-Window.png"
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
