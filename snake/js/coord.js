(function(){
  if (typeof Game == "undefined") {
    window.Game = {};
  }

  var Coord = Game.Coord = function (x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype.plus = function (newCoord) {
    return new Coord(this.x + newCoord.x, this.y + newCoord.y);
  };

  Coord.prototype.equals = function (otherCoord) {
    return (this.x === otherCoord.x) && (this.y === otherCoord.y);
  };

  Coord.prototype.isOpposite = function (oppCoord) {
    return (this.x == (-1 * oppCoord.x)) && (this.y == (-1 * oppCoord.y));
  };
})();
