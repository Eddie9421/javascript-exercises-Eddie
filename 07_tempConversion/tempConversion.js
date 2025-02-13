const convertToCelsius = function(temperature) 
{
  // Fahrenheit to Celsius formula: x degrees Fahrenheit = (x - 32) * (5/9) degrees Celsius
  temperature -= 32;
  temperature *= (5/9);
  return Math.round(temperature * 10) / 10;
};

const convertToFahrenheit = function(temperature) 
{
  // Celsius to Fahrenheit formula: x degrees Celsius = (x * (9/5) + 32) degrees Fahrenheit
  temperature *= (9/5);
  temperature += 32;
  return Math.round(temperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
