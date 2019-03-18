import {tamagotchi} from './../src/tamagotchi.js';

describe('tamagotchi', function() {
  let tam = tamagotchi;

  beforeEach(function() {
    // jasmine.clock().install();
    tam.foodLevel = 10;
    tam.sleep = 10;
    tam.game = 10;
    tam.setHunger();
    tam.setSleep();
    tam.setPlay();
  });

  it('should display sleep got and sleep level', function() {
    expect(tam.sleepSmall("small")).toEqual("Your Tamagotchi got some small sleep! Sleep level increased by 5!");
    expect(tam.sleep).toEqual(15);
  });

  it('should display food got and food level', function() {
    expect(tam.eatSmall("child")).toEqual("Tamagotchi ate a child! Food level goes up 5!");
    expect(tam.foodLevel).toEqual(15);
  });

  it('should display game got and game level', function() {
    expect(tam.playSmall("small")).toEqual("Your Tamagotchi played small! Play level increased by 5!");
    jasmine.clock().tick(5001);
    expect(tam.game).toEqual(15);
  })
});
