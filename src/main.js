import {tamagotchi} from './tamagotchi.js';
import './input.scss';
import $ from 'jquery';

let tam = tamagotchi;
tam.foodLevel = 10;
tam.sleep = 10;
tam.game = 100;
tam.setHunger();
tam.setSleep();
tam.setPlay();

console.log(tam.foodLevel);
console.log(tam.sleep);
console.log(tam.game);
const textInterval = setInterval(() => {
  $(".foodCount").text(tam.foodLevel)
  if (tam.foodLevel === "Tamagotchi is DEAD!") {
    clearInterval(textInterval);
  }
}, 100);

const sleepInterval = setInterval(() => {
  $(".dream").text(tam.sleep)
  if (tam.sleep === "ZZZZZZZZZ") {
    clearInterval(sleepInterval);
  }
  console.log(tam.sleep);
}, 100);

setInterval(() => {
  $(".jumping-jacks").text(tam.game)
}, 100);

$(".feed").click(function() {
  const meep = tam.eatSmall("BABY");
  $(".fed").text(meep);
});

$(".tam-sleep").click(function() {
  const blah = tam.sleepSmall("ZZZZZ");
  $(".snor").text(blah);
});

$(".tam-play").click(function() {
  const bleh = tam.playSmall("Let's Play!");
  $(".ball").text(bleh);
});

$(document).ready(function() {
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=tamagotchi&limit=25&offset=0&rating=G&lang=en`,
        type: `GET`,
        data: {
          format: 'json'
        },
        success: function(response) {
          $(".whatever").html(`<img src='${response.data[Math.floor(Math.random() * 25)].images.original.url}'></img>`)
        },
        error: function() {
          $('#errors').text("there was an error pricessing your request. Please try again.");
      }
    });
});
