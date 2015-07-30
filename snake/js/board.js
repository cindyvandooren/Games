(function(){
  var Game = window.Game = window.Game || {};

  var Board = Game.Board = function () {
    this.snake = new Game.Snake([1,0]);
    this.board = [];
    this.populate();
  };

  Board.prototype.populate = function () {
    for (var i = 0; i < 50; i++) {
      this.board.push(new Array (50));
    }
  };

  Board.prototype.render = function () {
    var arr = this.board
    var that = this;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (that.snakePresent([i, j])) {
          console.log("S");
        } else {
          console.log(".");
        }
      }
      console.log("\n");
    }
  };


Board.prototype.snakePresent = function (coord) {
  var that = this;
  if (that.snake.segments.some(function (cV) {
    cV.equals(coord)})) {
    return true;
  } else {
    return false;
  }
}

})();
