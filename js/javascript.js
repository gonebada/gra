'use strict';
var output = document.getElementById('greeter-output');

var button = document.getElementById('greeter-button');
var temp;
var tempf

button.addEventListener('click', function () {
    temp = window.prompt('What is the temperature today?')
    tempf = (temp * 1.8) + 32
    if ((temp == null || temp == undefined || temp == '')) {
        output.innerHTML = "Value can't be empty" + '<br><br>' + output.innerHTML;
    } else if (isNaN(temp)) {
        output.innerHTML = "Not a number" + '<br><br>' + output.innerHTML;
    } else {
        if (temp < 0) {
            output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + tempf + '<br>' + 'Ubierz ciepłą kurtkę i szalik, bo woda zamarza!' + '<br><br>' + output.innerHTML;
        } else if (temp >= 0 && temp < 75) {
            if (temp < 15) {
                output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + tempf + '<br><br>' + 'Ubierz lekką kurtkę' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output.innerHTML;
            } else {
                output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + tempf + '<br><br>' + 'Krutkie spodenki będą spoko!' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output.innerHTML;
            }

        } else {
            output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + tempf + '<br><br>' + 'Woda już paruje!' + '<br><br>' + output.innerHTML;
        }

    }
});


//kalkulator temperatury

var output2 = document.getElementById('greeter-output2');

var button2 = document.getElementById('greeter-button2');
var tempc;

button2.addEventListener('click', function () {
    temp = window.prompt('What is the temperature today?')
    tempc = (temp - 32) / 1.8
    if ((temp == null || temp == undefined || temp == '')) {
        output2.innerHTML = "Value can't be empty" + '<br><br>' + output2.innerHTML;
    } else if (isNaN(temp)) {
        output2.innerHTML = "Not a number" + '<br><br>' + output2.innerHTML;
    } else {
        if (tempc < 0) {
            output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br>' + 'Ubierz ciepłą kurtkę i szalik, bo woda zamarza!' + '<br><br>' + output2.innerHTML;
        } else if (tempc >= 0 && tempc < 75) {
            if (tempc < 15) {
                output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Ubierz lekką kurtkę' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output2.innerHTML;
            } else {
                output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Krutkie spodenki będą spoko!' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output2.innerHTML;
            }

        } else {
            output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Woda już paruje!' + '<br><br>' + output2.innerHTML;
        }
    }
});


/*Twoim zadaniem jest wydzielenie fragmentów kodu z poprzedniego zadania i zapisanie ich jako funkcji.
var temp
var tempf = function(temp){
    temp = (temp * 1.8) + 32
    document.write('Temperature in Farenheit is: ' + temp + '<br>')
}
temp = window.prompt('What is the temperature today?')

Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F.
Funkcja, która przyjmuje temperaturę C i zwraca informację np. o stanie skupienia wody.
Funkcja, która przyjmuje temperaturę F i zwraca temperaturę C.
Funkcję, która wyświetla tekst na stronie, odpowiednio dodając nową linię.*/