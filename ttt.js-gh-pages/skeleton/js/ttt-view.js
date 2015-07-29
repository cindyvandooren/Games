(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    // only select current cell
    // then call makeMove on that cell
    var that = this;
    $(".cell").on("click", function(event) {
      var $currentCell = $(event.currentTarget);
      that.makeMove($currentCell);
    })
  };

  View.prototype.makeMove = function ($cell) {
    // callback should set class to clicked (white bg + show current Player's symbol)
    if ($cell.hasClass("clicked")) {
      alert("Invalid move")
    } else {
      $cell.addClass("clicked");
      var cellId = $currentCell.data("id");
      this.game.playMove(cellId);
    }
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < 3; i++) {
      var row = $("<div class='row'></div>");
      for (var j = 0; j < 3; j++) {
        var cell = $("<div class='cell'></div>");
        cell.data("id", [i, j]);
        row.append(cell);
      }

      this.$el.append(row);
    }


  };
})();
