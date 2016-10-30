"use strict";

var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function(pinsDown) {
  this.rolls.push(pinsDown);
};

Game.prototype.score = function() {
  var result = 0;
  for(var i = 0; i < 20; i++) {
    result += this.rolls[i];
  }
  return result;
};
