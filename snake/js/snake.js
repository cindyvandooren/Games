(function(){
  if (typeof Game === "undefined") {
    window.Game = {};
  }

  var Snake = Game.Snake = function (board) {
    this.dir = "N";
    this.board = board;
    var middle = Math.floor(board.dim / 2);
    var center = new Coord(middle, middle);
    // the segments will be grid coordinates
    // start with middle of the board
    this.segments = [center];
  };

  Snake.DIRS = {
    "N": (0, -1),
    "E": (1, 0),
    "S": (0, 1),
    "W": (-1, 0)
  };

  Snake.prototype.move = function () {
    // for every coordinate in this.segments, make a new coordinate of
    // direction and add it to the segments coordinate.

  };


})();
