'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune')
  .then((response) => response.text())
  .then((responseData) => {
    document.querySelector('#fortune-text').innerHTML = responseData;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  fetch(url+`?zipcode=${zipcode}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#weather-info').innerText = data.forecast;
      
    });

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  // fetch('/order-melons.json')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     document.querySelector('#weather-info').innerHTML = data.temp;
    };   

document.querySelector('#order-form').addEventListener('submit', orderMelons);
