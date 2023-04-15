const { Suggestion } = require("dialogflow-fulfillment");

function topics() {
  return [
    new Suggestion("About Sprout Mobile Features"),
    new Suggestion("Clock In/Out"),
    new Suggestion("My Requests"),
    new Suggestion("Instacash"),
  ];
}

function aboutFeatures() {
  return [
    new Suggestion("Mobile Bundy"),
    new Suggestion("Geotag and Geofence"),
    new Suggestion("My Requests"),
    new Suggestion("Instacash"),
  ];
}

module.exports = {
  topics: topics,
  aboutFeatures: aboutFeatures,
};
