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



})();
