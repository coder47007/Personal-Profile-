// Fahrenheit to Celsius conversion
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Anonymous function for Celsius to Kelvin conversion
$('#convertBtn').click(function() {
    var fahrenheit = $('#tempInput').val();
    if (fahrenheit !== '') {
        var celsius = fahrenheitToCelsius(fahrenheit); // Convert to Celsius
        var kelvin = celsius + 273.15; // Convert to Kelvin
        $('#result').html(`Temperature in Celsius: ${celsius.toFixed(2)}°C<br>Temperature in Kelvin: ${kelvin.toFixed(2)}K`);
    } else {
        $('#result').html('Please enter a temperature value.');
    }
});
