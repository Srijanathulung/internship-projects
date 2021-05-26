document.addEventListener("keydown", function (e) {
  if ((e.key = "Enter")) {
    var box = document.getElementById("box-1");

    box.style.width = "500px";
    box.style.height = "600px";
    box.style.border = "1px solid black";
    box.style.position = "absolute";

    document.addEventListener("click", function () {
      var ball = document.createElement("div");

      var i = 0;
      ball.id = i;

      ball.style.width = "25px";
      ball.style.height = "25px";
      ball.style.backgroundColor = "red";
      ball.style.borderRadius = "50%";
      ball.style.position = "absolute";
      ball.style.top = Math.random() * (box.clientHeight - 25) + "px";
      ball.style.left = Math.random() * (box.clientWidth - 25) + "px";

      box.appendChild(ball);

      var direction = 1;

      setInterval(function () {
        var currentTop = ball.style.top;
        var newTop = parseInt(currentTop) + 10 * direction;
        ball.style.top = newTop + "px";
        var clientHeight = box.clientHeight;
        if (newTop >= clientHeight - 20 || newTop <= 0) {
          direction *= -1;
          ball.style.backgroundColor = "green";
        }
      }, 1000 / 60);
    });
    box.appendChild(ball);
    i++;
  }
});
