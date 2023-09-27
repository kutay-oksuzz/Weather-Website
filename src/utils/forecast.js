const request = require("request");

const forecast = ({ latitude, longitude }, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4175ac8a31e15a83f326cc1607fa2b84&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Something is wrong!", undefined);
    } else if (body.error) {
      callback("blablabla");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out and humidity equals ${body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;
