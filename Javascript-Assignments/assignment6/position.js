function Position(width, height) {
  var width;
  var height;

  this.generateXY = function () {
    this.x = Math.random() * height;
    this.y = Math.random() * width;
  };
}
