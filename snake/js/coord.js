(function(){
  var Game = window.Game = window.Game || {};

  var Coord = Game.Coord = function (coords, dir) {
    this.x = coords[0];
    this.y = coords[1];
    this.dir = dir;
  };

  Coord.prototype.plus = function (changeCoords) {
    this.x += changeCoords[0];
    this.y += changeCoords[1];
  };

  Coord.prototype.equals = function (otherCoords) {
    if (this.x === otherCoords[0] && this.y === otherCoords[1]) {
      return true;
    } else {
      return false;
    }
  };

  Coord.prototype.isOpposite = function (oppCoords) {
    if (oppCoords[0] === -1 * this.dir[0] || oppCoords[1] === -1 * this.dir[1]) {
      return true;
    } else {
      return false;
    }
  };




})();
