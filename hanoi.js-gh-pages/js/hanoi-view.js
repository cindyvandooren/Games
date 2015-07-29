(function(){
  var Hanoi = window.Hanoi = window.Hanoi || {};

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers($el);
    this.render();
  }

  View.prototype.setupTowers = function ($el) {
    for (var i = 0; i < 3; i++) {
      var $pile = $("<div class='pile'></div>");
      $pile.addClass("" + i);
      for (var j = 0; j < 3; j++) {
        var $disc = $("<div class='disc'></div>");
        $pile.append($disc);
      }
      $el.append($pile);
    }
  };

  View.prototype.render = function () {
    var towers = this.game.towers;
    towers.forEach(function (tower, towerIndex) {
      tower.forEach(function (disc, discIndex) {
        var discNum = 3 - discIndex;
        var className = "." + towerIndex + " :nth-child(" + discNum + ")"
        $(className).addClass("" + disc);
      })
    })
  }
})();
