(function(){
  var Game = window.Game = window.Game || {};

  var Snake = Game.Snake = function (dir) {
    this.dir = dir;
    this.segments = [ new Game.Coord([0,0], [1,0])  ];
  }



})();
