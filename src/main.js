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
setInterval(() => {
  $(".foodCount").text(tam.foodLevel)
}, 100);

setInterval(() => {
  $(".dream").text(tam.sleep)
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
