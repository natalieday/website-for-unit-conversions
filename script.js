// Temperature Conversion Function
function convertTemp() {
    // Get Celsius and Fahrenheit input values
    var c = document.getElementById("c").value;
    var f = document.getElementById("f").value;

    // Variable to store the resulting temperature
    let resultingTemperature;

    // Check conditions for Celsius to Fahrenheit conversion
    if (!isNaN(c) && c !== "" && f === "") {
        // Convert Celsius to Fahrenheit
        resultingTemperature = c * 9 / 5 + 32;
        resultingTemperature = resultingTemperature + "°F"; // Add unit to the result
    } 
    // Check conditions for Fahrenheit to Celsius conversion
    else if (!isNaN(f) && f !== "" && c === "") {
        // Convert Fahrenheit to Celsius
        resultingTemperature = (f - 32) * 5 / 9;
        resultingTemperature = resultingTemperature + "°C"; // Add unit to the result
    } 
    // Invalid input case
    else {
        resultingTemperature = "Invalid input";
    }

    // Display the resulting temperature
    document.getElementById("resultingTemperature").innerText = resultingTemperature;
}

// Weight Conversion Function
function convertWeight() {
    // Get Pounds and Kilograms input values
    var lbs = document.getElementById("lbs").value;
    var kg = document.getElementById("kg").value;

    // Variable to store the resulting weight
    let resultingWeight;

    // Check conditions for Pounds to Kilograms conversion
    if (!isNaN(lbs) && lbs !== "" && kg === "") {
        // Convert Pounds to Kilograms
        resultingWeight = lbs * 0.453592;
        resultingWeight = resultingWeight + " kg"; // Add unit to the result
    } 
    // Check conditions for Kilograms to Pounds conversion
    else if (!isNaN(kg) && kg !== "" && lbs === "") {
        // Convert Kilograms to Pounds
        resultingWeight = kg * 2.20462;
        resultingWeight = resultingWeight + " lbs"; // Add unit to the result
    } 
    // Invalid input case
    else {
        resultingWeight = "Invalid input";
    }

    // Display the resulting weight
    document.getElementById("resultingWeight").innerText = resultingWeight;
}

// Distance Conversion Function
function convertDistance() {
    // Get Kilometers and Miles input values
    var km = document.getElementById("km").value;
    var m = document.getElementById("m").value;

    // Variable to store the resulting distance
    let resultingDistance;

    // Check conditions for Kilometers to Miles conversion
    if (!isNaN(km) && km !== "" && m === "") {
        // Convert Kilometers to Miles
        resultingDistance = km * 0.621371;
        resultingDistance = resultingDistance + " miles"; // Add unit to the result
    } 
    // Check conditions for Miles to Kilometers conversion
    else if (!isNaN(m) && m !== "" && km === "") {
        // Convert Miles to Kilometers
        resultingDistance = m * 1.60934;
        resultingDistance = resultingDistance + " km"; // Add unit to the result
    } 
    // Invalid input case
    else {
        resultingDistance = "Invalid input";
    }

    // Display the resulting distance
    document.getElementById("resultingDistance").innerText = resultingDistance;
}
