const submitButton = document.getElementById('submit');
const answerInput = document.getElementById('answer-input');

submitButton.addEventListener('click', function(){
    const value = parseInt(document.getElementById('value-input').value);
    const from = document.getElementById('from-select').value;
    const to = document.getElementById('to-select').value;

    switch(from) {
        case 'celsius':
            if(to === 'kelvin') {
                answerInput.value = celsiusToKelvin(value);
            } else {
                answerInput.value = celsiusToFahrenheit(value);
            }
            break;
        case 'kelvin':
            if(to === 'celsius') {
                answerInput.value = kelvinToCelsius(value);
            } else {
                answerInput.value = kelvinToFahrenheit(value);
            }
            break;
        case 'fahrenheit':
            if(to === 'celsius') {
                answerInput.value = fahrenheitToCelsius(value);
            } else {
                answerInput.value = fahrenheitToKelvin(value);
            }
            break;
    }
});



// Celsius converter
const celsiusToKelvin = (celsius) => {
    return celsius + 273;
}

const celsiusToFahrenheit = (celsius) => {
    return Math.floor(celsius * (9/5) + 32);
}

// Kelvin converter
const kelvinToCelsius = (kelvin) => {
    return kelvin - 273;
}

const kelvinToFahrenheit = (kelvin) => {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

// Fahrenheit converter
const fahrenheitToCelsius = (fahrenheit) => {
    return Math.floor((fahrenheit - 32) / (9/5));
}

const fahrenheitToKelvin = (fahrenheit) => {
    return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}


//    if(from === 'celsius' && to === 'kelvin') {
//        answerInput.value = celsiusToKelvin(value);
//    } 
//    if(from === 'celsius' && to === 'fahrenheit') {
//        answerInput.value = celsiusToFahrenheit(value); 
//    }
//    