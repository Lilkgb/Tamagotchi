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
