export let tamagotchi = {
  foodLevel: 10,
  sleep: 10,
  game: 100,
  setHunger: function() {
    const hungerInterval = setInterval (() => {
      this.foodLevel--;
      if (this.didYouFeed() === true) {
        clearInterval(hungerInterval);
        return "Tamagotchi is Hungry";
      }
    }, 1000);
  },
  didYouFeed: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `Tamagotchi ate a ${food}! Food level goes up ${amount}!`
    }
  },

  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleep--;
      if (this.didYouSleep() === true) {
        clearInterval(sleepInterval);
        return "ZZZZZZZZZ"
      }
    }, 1000);
  },

  didYouSleep: function() {
    if (this.sleep>0) {
      return false;
    } else {
      return true;
    }
  },

  sleep: function(amount) {
    let that = this;
    return function(sleep) {
      that.sleep += amount
      return `Your Tamagotchi got some ${sleep} sleep! Sleep level increased by ${amount}!`
    }
  },

  setPlay: function() {
    const playInterval = setInterval(() => {
      this.game--;
      if (this.didYouPlay() === true) {
        clearInterval(playInterval);
        return "YAY"
      }
    }, 3000);
  },

  didYouPlay: function() {
    if (this.game > 0) {
      return false;
    } else {
      return true;
    }
  },

  game: function(amount) {
    let that = this;
    return function(game) {
      that.game += amount
      return `Your Tamagotchi played ${game}! Play level increased by ${amount}!`
    }
  },

};

tamagotchi.sleepSmall = tamagotchi.sleep(5);
tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.playSmall = tamagotchi.game(5);
