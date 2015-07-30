(function(){
  var Game = window.Game = window.Game || {};

  var Snake = Game.Snake = function (dir) {
    this.dir = dir;
    this.segments = [ new Game.Coord([0,0], [1,0])  ];
  }

  Snake.prototype.move = function () {
    this.segments.map( function(segment) {
      segment[0] + dir[0];
      segment[1] + dir[1];
    });
  };

  Snake.prototype.turn = function (newDirection) {
    this.dir = newDirection;
  };



})();
